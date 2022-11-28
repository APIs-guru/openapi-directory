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
var UpdateJobPathParams = /** @class */ (function (_super) {
    __extends(UpdateJobPathParams, _super);
    function UpdateJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], UpdateJobPathParams.prototype, "jobId", void 0);
    return UpdateJobPathParams;
}(SpeakeasyBase));
export { UpdateJobPathParams };
var UpdateJobQueryParams = /** @class */ (function (_super) {
    __extends(UpdateJobQueryParams, _super);
    function UpdateJobQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=namespaceId" }),
        __metadata("design:type", String)
    ], UpdateJobQueryParams.prototype, "namespaceId", void 0);
    return UpdateJobQueryParams;
}(SpeakeasyBase));
export { UpdateJobQueryParams };
var UpdateJobHeaders = /** @class */ (function (_super) {
    __extends(UpdateJobHeaders, _super);
    function UpdateJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateJobHeaders;
}(SpeakeasyBase));
export { UpdateJobHeaders };
// UpdateJobRequestBodyAbortConfig
/**
 * The criteria that determine when and how a job abort takes place.
**/
var UpdateJobRequestBodyAbortConfig = /** @class */ (function (_super) {
    __extends(UpdateJobRequestBodyAbortConfig, _super);
    function UpdateJobRequestBodyAbortConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criteriaList", elemType: shared.AbortCriteria }),
        __metadata("design:type", Array)
    ], UpdateJobRequestBodyAbortConfig.prototype, "criteriaList", void 0);
    return UpdateJobRequestBodyAbortConfig;
}(SpeakeasyBase));
export { UpdateJobRequestBodyAbortConfig };
// UpdateJobRequestBodyJobExecutionsRolloutConfig
/**
 * Allows you to create a staged rollout of a job.
**/
var UpdateJobRequestBodyJobExecutionsRolloutConfig = /** @class */ (function (_super) {
    __extends(UpdateJobRequestBodyJobExecutionsRolloutConfig, _super);
    function UpdateJobRequestBodyJobExecutionsRolloutConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exponentialRate" }),
        __metadata("design:type", shared.ExponentialRolloutRate)
    ], UpdateJobRequestBodyJobExecutionsRolloutConfig.prototype, "exponentialRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumPerMinute" }),
        __metadata("design:type", Number)
    ], UpdateJobRequestBodyJobExecutionsRolloutConfig.prototype, "maximumPerMinute", void 0);
    return UpdateJobRequestBodyJobExecutionsRolloutConfig;
}(SpeakeasyBase));
export { UpdateJobRequestBodyJobExecutionsRolloutConfig };
// UpdateJobRequestBodyPresignedUrlConfig
/**
 * Configuration for pre-signed S3 URLs.
**/
var UpdateJobRequestBodyPresignedUrlConfig = /** @class */ (function (_super) {
    __extends(UpdateJobRequestBodyPresignedUrlConfig, _super);
    function UpdateJobRequestBodyPresignedUrlConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresInSec" }),
        __metadata("design:type", Number)
    ], UpdateJobRequestBodyPresignedUrlConfig.prototype, "expiresInSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], UpdateJobRequestBodyPresignedUrlConfig.prototype, "roleArn", void 0);
    return UpdateJobRequestBodyPresignedUrlConfig;
}(SpeakeasyBase));
export { UpdateJobRequestBodyPresignedUrlConfig };
// UpdateJobRequestBodyTimeoutConfig
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
var UpdateJobRequestBodyTimeoutConfig = /** @class */ (function (_super) {
    __extends(UpdateJobRequestBodyTimeoutConfig, _super);
    function UpdateJobRequestBodyTimeoutConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inProgressTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], UpdateJobRequestBodyTimeoutConfig.prototype, "inProgressTimeoutInMinutes", void 0);
    return UpdateJobRequestBodyTimeoutConfig;
}(SpeakeasyBase));
export { UpdateJobRequestBodyTimeoutConfig };
var UpdateJobRequestBody = /** @class */ (function (_super) {
    __extends(UpdateJobRequestBody, _super);
    function UpdateJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abortConfig" }),
        __metadata("design:type", UpdateJobRequestBodyAbortConfig)
    ], UpdateJobRequestBody.prototype, "abortConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateJobRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" }),
        __metadata("design:type", UpdateJobRequestBodyJobExecutionsRolloutConfig)
    ], UpdateJobRequestBody.prototype, "jobExecutionsRolloutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=presignedUrlConfig" }),
        __metadata("design:type", UpdateJobRequestBodyPresignedUrlConfig)
    ], UpdateJobRequestBody.prototype, "presignedUrlConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutConfig" }),
        __metadata("design:type", UpdateJobRequestBodyTimeoutConfig)
    ], UpdateJobRequestBody.prototype, "timeoutConfig", void 0);
    return UpdateJobRequestBody;
}(SpeakeasyBase));
export { UpdateJobRequestBody };
var UpdateJobRequest = /** @class */ (function (_super) {
    __extends(UpdateJobRequest, _super);
    function UpdateJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateJobPathParams)
    ], UpdateJobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateJobQueryParams)
    ], UpdateJobRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateJobHeaders)
    ], UpdateJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateJobRequestBody)
    ], UpdateJobRequest.prototype, "request", void 0);
    return UpdateJobRequest;
}(SpeakeasyBase));
export { UpdateJobRequest };
var UpdateJobResponse = /** @class */ (function (_super) {
    __extends(UpdateJobResponse, _super);
    function UpdateJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJobResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJobResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJobResponse.prototype, "throttlingException", void 0);
    return UpdateJobResponse;
}(SpeakeasyBase));
export { UpdateJobResponse };
