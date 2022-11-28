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
var CreateJobTemplatePathParams = /** @class */ (function (_super) {
    __extends(CreateJobTemplatePathParams, _super);
    function CreateJobTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobTemplateId" }),
        __metadata("design:type", String)
    ], CreateJobTemplatePathParams.prototype, "jobTemplateId", void 0);
    return CreateJobTemplatePathParams;
}(SpeakeasyBase));
export { CreateJobTemplatePathParams };
var CreateJobTemplateHeaders = /** @class */ (function (_super) {
    __extends(CreateJobTemplateHeaders, _super);
    function CreateJobTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateJobTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateJobTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateJobTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateJobTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateJobTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateJobTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateJobTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateJobTemplateHeaders;
}(SpeakeasyBase));
export { CreateJobTemplateHeaders };
// CreateJobTemplateRequestBodyAbortConfig
/**
 * The criteria that determine when and how a job abort takes place.
**/
var CreateJobTemplateRequestBodyAbortConfig = /** @class */ (function (_super) {
    __extends(CreateJobTemplateRequestBodyAbortConfig, _super);
    function CreateJobTemplateRequestBodyAbortConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criteriaList", elemType: shared.AbortCriteria }),
        __metadata("design:type", Array)
    ], CreateJobTemplateRequestBodyAbortConfig.prototype, "criteriaList", void 0);
    return CreateJobTemplateRequestBodyAbortConfig;
}(SpeakeasyBase));
export { CreateJobTemplateRequestBodyAbortConfig };
// CreateJobTemplateRequestBodyJobExecutionsRolloutConfig
/**
 * Allows you to create a staged rollout of a job.
**/
var CreateJobTemplateRequestBodyJobExecutionsRolloutConfig = /** @class */ (function (_super) {
    __extends(CreateJobTemplateRequestBodyJobExecutionsRolloutConfig, _super);
    function CreateJobTemplateRequestBodyJobExecutionsRolloutConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exponentialRate" }),
        __metadata("design:type", shared.ExponentialRolloutRate)
    ], CreateJobTemplateRequestBodyJobExecutionsRolloutConfig.prototype, "exponentialRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumPerMinute" }),
        __metadata("design:type", Number)
    ], CreateJobTemplateRequestBodyJobExecutionsRolloutConfig.prototype, "maximumPerMinute", void 0);
    return CreateJobTemplateRequestBodyJobExecutionsRolloutConfig;
}(SpeakeasyBase));
export { CreateJobTemplateRequestBodyJobExecutionsRolloutConfig };
// CreateJobTemplateRequestBodyPresignedUrlConfig
/**
 * Configuration for pre-signed S3 URLs.
**/
var CreateJobTemplateRequestBodyPresignedUrlConfig = /** @class */ (function (_super) {
    __extends(CreateJobTemplateRequestBodyPresignedUrlConfig, _super);
    function CreateJobTemplateRequestBodyPresignedUrlConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresInSec" }),
        __metadata("design:type", Number)
    ], CreateJobTemplateRequestBodyPresignedUrlConfig.prototype, "expiresInSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], CreateJobTemplateRequestBodyPresignedUrlConfig.prototype, "roleArn", void 0);
    return CreateJobTemplateRequestBodyPresignedUrlConfig;
}(SpeakeasyBase));
export { CreateJobTemplateRequestBodyPresignedUrlConfig };
// CreateJobTemplateRequestBodyTimeoutConfig
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
var CreateJobTemplateRequestBodyTimeoutConfig = /** @class */ (function (_super) {
    __extends(CreateJobTemplateRequestBodyTimeoutConfig, _super);
    function CreateJobTemplateRequestBodyTimeoutConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inProgressTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], CreateJobTemplateRequestBodyTimeoutConfig.prototype, "inProgressTimeoutInMinutes", void 0);
    return CreateJobTemplateRequestBodyTimeoutConfig;
}(SpeakeasyBase));
export { CreateJobTemplateRequestBodyTimeoutConfig };
var CreateJobTemplateRequestBody = /** @class */ (function (_super) {
    __extends(CreateJobTemplateRequestBody, _super);
    function CreateJobTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abortConfig" }),
        __metadata("design:type", CreateJobTemplateRequestBodyAbortConfig)
    ], CreateJobTemplateRequestBody.prototype, "abortConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateJobTemplateRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document" }),
        __metadata("design:type", String)
    ], CreateJobTemplateRequestBody.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentSource" }),
        __metadata("design:type", String)
    ], CreateJobTemplateRequestBody.prototype, "documentSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobArn" }),
        __metadata("design:type", String)
    ], CreateJobTemplateRequestBody.prototype, "jobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" }),
        __metadata("design:type", CreateJobTemplateRequestBodyJobExecutionsRolloutConfig)
    ], CreateJobTemplateRequestBody.prototype, "jobExecutionsRolloutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=presignedUrlConfig" }),
        __metadata("design:type", CreateJobTemplateRequestBodyPresignedUrlConfig)
    ], CreateJobTemplateRequestBody.prototype, "presignedUrlConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateJobTemplateRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutConfig" }),
        __metadata("design:type", CreateJobTemplateRequestBodyTimeoutConfig)
    ], CreateJobTemplateRequestBody.prototype, "timeoutConfig", void 0);
    return CreateJobTemplateRequestBody;
}(SpeakeasyBase));
export { CreateJobTemplateRequestBody };
var CreateJobTemplateRequest = /** @class */ (function (_super) {
    __extends(CreateJobTemplateRequest, _super);
    function CreateJobTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateJobTemplatePathParams)
    ], CreateJobTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateJobTemplateHeaders)
    ], CreateJobTemplateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateJobTemplateRequestBody)
    ], CreateJobTemplateRequest.prototype, "request", void 0);
    return CreateJobTemplateRequest;
}(SpeakeasyBase));
export { CreateJobTemplateRequest };
var CreateJobTemplateResponse = /** @class */ (function (_super) {
    __extends(CreateJobTemplateResponse, _super);
    function CreateJobTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobTemplateResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateJobTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateJobTemplateResponse)
    ], CreateJobTemplateResponse.prototype, "createJobTemplateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobTemplateResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobTemplateResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobTemplateResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobTemplateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateJobTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateJobTemplateResponse.prototype, "throttlingException", void 0);
    return CreateJobTemplateResponse;
}(SpeakeasyBase));
export { CreateJobTemplateResponse };
