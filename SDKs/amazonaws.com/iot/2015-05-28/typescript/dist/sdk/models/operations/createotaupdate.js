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
var CreateOtaUpdatePathParams = /** @class */ (function (_super) {
    __extends(CreateOtaUpdatePathParams, _super);
    function CreateOtaUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=otaUpdateId" }),
        __metadata("design:type", String)
    ], CreateOtaUpdatePathParams.prototype, "otaUpdateId", void 0);
    return CreateOtaUpdatePathParams;
}(SpeakeasyBase));
export { CreateOtaUpdatePathParams };
var CreateOtaUpdateHeaders = /** @class */ (function (_super) {
    __extends(CreateOtaUpdateHeaders, _super);
    function CreateOtaUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateOtaUpdateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateOtaUpdateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateOtaUpdateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateOtaUpdateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateOtaUpdateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateOtaUpdateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateOtaUpdateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateOtaUpdateHeaders;
}(SpeakeasyBase));
export { CreateOtaUpdateHeaders };
// CreateOtaUpdateRequestBodyAwsJobAbortConfig
/**
 * The criteria that determine when and how a job abort takes place.
**/
var CreateOtaUpdateRequestBodyAwsJobAbortConfig = /** @class */ (function (_super) {
    __extends(CreateOtaUpdateRequestBodyAwsJobAbortConfig, _super);
    function CreateOtaUpdateRequestBodyAwsJobAbortConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abortCriteriaList", elemType: shared.AwsJobAbortCriteria }),
        __metadata("design:type", Array)
    ], CreateOtaUpdateRequestBodyAwsJobAbortConfig.prototype, "abortCriteriaList", void 0);
    return CreateOtaUpdateRequestBodyAwsJobAbortConfig;
}(SpeakeasyBase));
export { CreateOtaUpdateRequestBodyAwsJobAbortConfig };
// CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig
/**
 * Configuration for the rollout of OTA updates.
**/
var CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig = /** @class */ (function (_super) {
    __extends(CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig, _super);
    function CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exponentialRate" }),
        __metadata("design:type", shared.AwsJobExponentialRolloutRate)
    ], CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig.prototype, "exponentialRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumPerMinute" }),
        __metadata("design:type", Number)
    ], CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig.prototype, "maximumPerMinute", void 0);
    return CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig;
}(SpeakeasyBase));
export { CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig };
// CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig
/**
 * Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
**/
var CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig = /** @class */ (function (_super) {
    __extends(CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig, _super);
    function CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresInSec" }),
        __metadata("design:type", Number)
    ], CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig.prototype, "expiresInSec", void 0);
    return CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig;
}(SpeakeasyBase));
export { CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig };
// CreateOtaUpdateRequestBodyAwsJobTimeoutConfig
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
var CreateOtaUpdateRequestBodyAwsJobTimeoutConfig = /** @class */ (function (_super) {
    __extends(CreateOtaUpdateRequestBodyAwsJobTimeoutConfig, _super);
    function CreateOtaUpdateRequestBodyAwsJobTimeoutConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inProgressTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], CreateOtaUpdateRequestBodyAwsJobTimeoutConfig.prototype, "inProgressTimeoutInMinutes", void 0);
    return CreateOtaUpdateRequestBodyAwsJobTimeoutConfig;
}(SpeakeasyBase));
export { CreateOtaUpdateRequestBodyAwsJobTimeoutConfig };
export var CreateOtaUpdateRequestBodyTargetSelectionEnum;
(function (CreateOtaUpdateRequestBodyTargetSelectionEnum) {
    CreateOtaUpdateRequestBodyTargetSelectionEnum["Continuous"] = "CONTINUOUS";
    CreateOtaUpdateRequestBodyTargetSelectionEnum["Snapshot"] = "SNAPSHOT";
})(CreateOtaUpdateRequestBodyTargetSelectionEnum || (CreateOtaUpdateRequestBodyTargetSelectionEnum = {}));
var CreateOtaUpdateRequestBody = /** @class */ (function (_super) {
    __extends(CreateOtaUpdateRequestBody, _super);
    function CreateOtaUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalParameters" }),
        __metadata("design:type", Map)
    ], CreateOtaUpdateRequestBody.prototype, "additionalParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsJobAbortConfig" }),
        __metadata("design:type", CreateOtaUpdateRequestBodyAwsJobAbortConfig)
    ], CreateOtaUpdateRequestBody.prototype, "awsJobAbortConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsJobExecutionsRolloutConfig" }),
        __metadata("design:type", CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig)
    ], CreateOtaUpdateRequestBody.prototype, "awsJobExecutionsRolloutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsJobPresignedUrlConfig" }),
        __metadata("design:type", CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig)
    ], CreateOtaUpdateRequestBody.prototype, "awsJobPresignedUrlConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsJobTimeoutConfig" }),
        __metadata("design:type", CreateOtaUpdateRequestBodyAwsJobTimeoutConfig)
    ], CreateOtaUpdateRequestBody.prototype, "awsJobTimeoutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateOtaUpdateRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: shared.OtaUpdateFile }),
        __metadata("design:type", Array)
    ], CreateOtaUpdateRequestBody.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocols" }),
        __metadata("design:type", Array)
    ], CreateOtaUpdateRequestBody.prototype, "protocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], CreateOtaUpdateRequestBody.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateOtaUpdateRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetSelection" }),
        __metadata("design:type", String)
    ], CreateOtaUpdateRequestBody.prototype, "targetSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets" }),
        __metadata("design:type", Array)
    ], CreateOtaUpdateRequestBody.prototype, "targets", void 0);
    return CreateOtaUpdateRequestBody;
}(SpeakeasyBase));
export { CreateOtaUpdateRequestBody };
var CreateOtaUpdateRequest = /** @class */ (function (_super) {
    __extends(CreateOtaUpdateRequest, _super);
    function CreateOtaUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOtaUpdatePathParams)
    ], CreateOtaUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOtaUpdateHeaders)
    ], CreateOtaUpdateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOtaUpdateRequestBody)
    ], CreateOtaUpdateRequest.prototype, "request", void 0);
    return CreateOtaUpdateRequest;
}(SpeakeasyBase));
export { CreateOtaUpdateRequest };
var CreateOtaUpdateResponse = /** @class */ (function (_super) {
    __extends(CreateOtaUpdateResponse, _super);
    function CreateOtaUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateOtaUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateOtaUpdateResponse)
    ], CreateOtaUpdateResponse.prototype, "createOtaUpdateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateOtaUpdateResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateOtaUpdateResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateOtaUpdateResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateOtaUpdateResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateOtaUpdateResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateOtaUpdateResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateOtaUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateOtaUpdateResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateOtaUpdateResponse.prototype, "unauthorizedException", void 0);
    return CreateOtaUpdateResponse;
}(SpeakeasyBase));
export { CreateOtaUpdateResponse };
