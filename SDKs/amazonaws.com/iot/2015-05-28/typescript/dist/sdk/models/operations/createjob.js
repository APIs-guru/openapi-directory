var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var CreateJobPathParams = /** @class */ (function (_super) {
    __extends(CreateJobPathParams, _super);
    function CreateJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], CreateJobPathParams.prototype, "jobId", void 0);
    return CreateJobPathParams;
}(SpeakeasyBase));
export { CreateJobPathParams };
var CreateJobHeaders = /** @class */ (function (_super) {
    __extends(CreateJobHeaders, _super);
    function CreateJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateJobHeaders;
}(SpeakeasyBase));
export { CreateJobHeaders };
// CreateJobRequestBodyAbortConfig
/**
 * The criteria that determine when and how a job abort takes place.
**/
var CreateJobRequestBodyAbortConfig = /** @class */ (function (_super) {
    __extends(CreateJobRequestBodyAbortConfig, _super);
    function CreateJobRequestBodyAbortConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criteriaList", elemType: shared.AbortCriteria }),
        __metadata("design:type", Array)
    ], CreateJobRequestBodyAbortConfig.prototype, "criteriaList", void 0);
    return CreateJobRequestBodyAbortConfig;
}(SpeakeasyBase));
export { CreateJobRequestBodyAbortConfig };
// CreateJobRequestBodyJobExecutionsRolloutConfig
/**
 * Allows you to create a staged rollout of a job.
**/
var CreateJobRequestBodyJobExecutionsRolloutConfig = /** @class */ (function (_super) {
    __extends(CreateJobRequestBodyJobExecutionsRolloutConfig, _super);
    function CreateJobRequestBodyJobExecutionsRolloutConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exponentialRate" }),
        __metadata("design:type", shared.ExponentialRolloutRate)
    ], CreateJobRequestBodyJobExecutionsRolloutConfig.prototype, "exponentialRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumPerMinute" }),
        __metadata("design:type", Number)
    ], CreateJobRequestBodyJobExecutionsRolloutConfig.prototype, "maximumPerMinute", void 0);
    return CreateJobRequestBodyJobExecutionsRolloutConfig;
}(SpeakeasyBase));
export { CreateJobRequestBodyJobExecutionsRolloutConfig };
// CreateJobRequestBodyPresignedUrlConfig
/**
 * Configuration for pre-signed S3 URLs.
**/
var CreateJobRequestBodyPresignedUrlConfig = /** @class */ (function (_super) {
    __extends(CreateJobRequestBodyPresignedUrlConfig, _super);
    function CreateJobRequestBodyPresignedUrlConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresInSec" }),
        __metadata("design:type", Number)
    ], CreateJobRequestBodyPresignedUrlConfig.prototype, "expiresInSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], CreateJobRequestBodyPresignedUrlConfig.prototype, "roleArn", void 0);
    return CreateJobRequestBodyPresignedUrlConfig;
}(SpeakeasyBase));
export { CreateJobRequestBodyPresignedUrlConfig };
export var CreateJobRequestBodyTargetSelectionEnum;
(function (CreateJobRequestBodyTargetSelectionEnum) {
    CreateJobRequestBodyTargetSelectionEnum["Continuous"] = "CONTINUOUS";
    CreateJobRequestBodyTargetSelectionEnum["Snapshot"] = "SNAPSHOT";
})(CreateJobRequestBodyTargetSelectionEnum || (CreateJobRequestBodyTargetSelectionEnum = {}));
// CreateJobRequestBodyTimeoutConfig
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
var CreateJobRequestBodyTimeoutConfig = /** @class */ (function (_super) {
    __extends(CreateJobRequestBodyTimeoutConfig, _super);
    function CreateJobRequestBodyTimeoutConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inProgressTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], CreateJobRequestBodyTimeoutConfig.prototype, "inProgressTimeoutInMinutes", void 0);
    return CreateJobRequestBodyTimeoutConfig;
}(SpeakeasyBase));
export { CreateJobRequestBodyTimeoutConfig };
var CreateJobRequestBody = /** @class */ (function (_super) {
    __extends(CreateJobRequestBody, _super);
    function CreateJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abortConfig" }),
        __metadata("design:type", CreateJobRequestBodyAbortConfig)
    ], CreateJobRequestBody.prototype, "abortConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateJobRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document" }),
        __metadata("design:type", String)
    ], CreateJobRequestBody.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentSource" }),
        __metadata("design:type", String)
    ], CreateJobRequestBody.prototype, "documentSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" }),
        __metadata("design:type", CreateJobRequestBodyJobExecutionsRolloutConfig)
    ], CreateJobRequestBody.prototype, "jobExecutionsRolloutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobTemplateArn" }),
        __metadata("design:type", String)
    ], CreateJobRequestBody.prototype, "jobTemplateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaceId" }),
        __metadata("design:type", String)
    ], CreateJobRequestBody.prototype, "namespaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=presignedUrlConfig" }),
        __metadata("design:type", CreateJobRequestBodyPresignedUrlConfig)
    ], CreateJobRequestBody.prototype, "presignedUrlConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateJobRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetSelection" }),
        __metadata("design:type", String)
    ], CreateJobRequestBody.prototype, "targetSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets" }),
        __metadata("design:type", Array)
    ], CreateJobRequestBody.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutConfig" }),
        __metadata("design:type", CreateJobRequestBodyTimeoutConfig)
    ], CreateJobRequestBody.prototype, "timeoutConfig", void 0);
    return CreateJobRequestBody;
}(SpeakeasyBase));
export { CreateJobRequestBody };
var CreateJobRequest = /** @class */ (function (_super) {
    __extends(CreateJobRequest, _super);
    function CreateJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateJobPathParams)
    ], CreateJobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateJobHeaders)
    ], CreateJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateJobRequestBody)
    ], CreateJobRequest.prototype, "request", void 0);
    return CreateJobRequest;
}(SpeakeasyBase));
export { CreateJobRequest };
var CreateJobResponse = /** @class */ (function (_super) {
    __extends(CreateJobResponse, _super);
    function CreateJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateJobResponse)
    ], CreateJobResponse.prototype, "createJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobResponse.prototype, "throttlingException", void 0);
    return CreateJobResponse;
}(SpeakeasyBase));
export { CreateJobResponse };
