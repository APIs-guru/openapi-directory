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
var UpdateJobExecutionPathParams = /** @class */ (function (_super) {
    __extends(UpdateJobExecutionPathParams, _super);
    function UpdateJobExecutionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], UpdateJobExecutionPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingName" }),
        __metadata("design:type", String)
    ], UpdateJobExecutionPathParams.prototype, "thingName", void 0);
    return UpdateJobExecutionPathParams;
}(SpeakeasyBase));
export { UpdateJobExecutionPathParams };
var UpdateJobExecutionHeaders = /** @class */ (function (_super) {
    __extends(UpdateJobExecutionHeaders, _super);
    function UpdateJobExecutionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateJobExecutionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateJobExecutionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateJobExecutionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateJobExecutionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateJobExecutionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateJobExecutionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateJobExecutionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateJobExecutionHeaders;
}(SpeakeasyBase));
export { UpdateJobExecutionHeaders };
export var UpdateJobExecutionRequestBodyStatusEnum;
(function (UpdateJobExecutionRequestBodyStatusEnum) {
    UpdateJobExecutionRequestBodyStatusEnum["Queued"] = "QUEUED";
    UpdateJobExecutionRequestBodyStatusEnum["InProgress"] = "IN_PROGRESS";
    UpdateJobExecutionRequestBodyStatusEnum["Succeeded"] = "SUCCEEDED";
    UpdateJobExecutionRequestBodyStatusEnum["Failed"] = "FAILED";
    UpdateJobExecutionRequestBodyStatusEnum["TimedOut"] = "TIMED_OUT";
    UpdateJobExecutionRequestBodyStatusEnum["Rejected"] = "REJECTED";
    UpdateJobExecutionRequestBodyStatusEnum["Removed"] = "REMOVED";
    UpdateJobExecutionRequestBodyStatusEnum["Canceled"] = "CANCELED";
})(UpdateJobExecutionRequestBodyStatusEnum || (UpdateJobExecutionRequestBodyStatusEnum = {}));
var UpdateJobExecutionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateJobExecutionRequestBody, _super);
    function UpdateJobExecutionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionNumber" }),
        __metadata("design:type", Number)
    ], UpdateJobExecutionRequestBody.prototype, "executionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedVersion" }),
        __metadata("design:type", Number)
    ], UpdateJobExecutionRequestBody.prototype, "expectedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeJobDocument" }),
        __metadata("design:type", Boolean)
    ], UpdateJobExecutionRequestBody.prototype, "includeJobDocument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeJobExecutionState" }),
        __metadata("design:type", Boolean)
    ], UpdateJobExecutionRequestBody.prototype, "includeJobExecutionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateJobExecutionRequestBody.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusDetails" }),
        __metadata("design:type", Map)
    ], UpdateJobExecutionRequestBody.prototype, "statusDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stepTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], UpdateJobExecutionRequestBody.prototype, "stepTimeoutInMinutes", void 0);
    return UpdateJobExecutionRequestBody;
}(SpeakeasyBase));
export { UpdateJobExecutionRequestBody };
var UpdateJobExecutionRequest = /** @class */ (function (_super) {
    __extends(UpdateJobExecutionRequest, _super);
    function UpdateJobExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateJobExecutionPathParams)
    ], UpdateJobExecutionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateJobExecutionHeaders)
    ], UpdateJobExecutionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateJobExecutionRequestBody)
    ], UpdateJobExecutionRequest.prototype, "request", void 0);
    return UpdateJobExecutionRequest;
}(SpeakeasyBase));
export { UpdateJobExecutionRequest };
var UpdateJobExecutionResponse = /** @class */ (function (_super) {
    __extends(UpdateJobExecutionResponse, _super);
    function UpdateJobExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJobExecutionResponse.prototype, "certificateValidationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateJobExecutionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJobExecutionResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJobExecutionResponse.prototype, "invalidStateTransitionException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJobExecutionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJobExecutionResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateJobExecutionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateJobExecutionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateJobExecutionResponse)
    ], UpdateJobExecutionResponse.prototype, "updateJobExecutionResponse", void 0);
    return UpdateJobExecutionResponse;
}(SpeakeasyBase));
export { UpdateJobExecutionResponse };
