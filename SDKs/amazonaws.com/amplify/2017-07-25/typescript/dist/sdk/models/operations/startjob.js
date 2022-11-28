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
var StartJobPathParams = /** @class */ (function (_super) {
    __extends(StartJobPathParams, _super);
    function StartJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], StartJobPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branchName" }),
        __metadata("design:type", String)
    ], StartJobPathParams.prototype, "branchName", void 0);
    return StartJobPathParams;
}(SpeakeasyBase));
export { StartJobPathParams };
var StartJobHeaders = /** @class */ (function (_super) {
    __extends(StartJobHeaders, _super);
    function StartJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartJobHeaders;
}(SpeakeasyBase));
export { StartJobHeaders };
export var StartJobRequestBodyJobTypeEnum;
(function (StartJobRequestBodyJobTypeEnum) {
    StartJobRequestBodyJobTypeEnum["Release"] = "RELEASE";
    StartJobRequestBodyJobTypeEnum["Retry"] = "RETRY";
    StartJobRequestBodyJobTypeEnum["Manual"] = "MANUAL";
    StartJobRequestBodyJobTypeEnum["WebHook"] = "WEB_HOOK";
})(StartJobRequestBodyJobTypeEnum || (StartJobRequestBodyJobTypeEnum = {}));
var StartJobRequestBody = /** @class */ (function (_super) {
    __extends(StartJobRequestBody, _super);
    function StartJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitId" }),
        __metadata("design:type", String)
    ], StartJobRequestBody.prototype, "commitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitMessage" }),
        __metadata("design:type", String)
    ], StartJobRequestBody.prototype, "commitMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitTime" }),
        __metadata("design:type", Date)
    ], StartJobRequestBody.prototype, "commitTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], StartJobRequestBody.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobReason" }),
        __metadata("design:type", String)
    ], StartJobRequestBody.prototype, "jobReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobType" }),
        __metadata("design:type", String)
    ], StartJobRequestBody.prototype, "jobType", void 0);
    return StartJobRequestBody;
}(SpeakeasyBase));
export { StartJobRequestBody };
var StartJobRequest = /** @class */ (function (_super) {
    __extends(StartJobRequest, _super);
    function StartJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartJobPathParams)
    ], StartJobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartJobHeaders)
    ], StartJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartJobRequestBody)
    ], StartJobRequest.prototype, "request", void 0);
    return StartJobRequest;
}(SpeakeasyBase));
export { StartJobRequest };
var StartJobResponse = /** @class */ (function (_super) {
    __extends(StartJobResponse, _super);
    function StartJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartJobResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartJobResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartJobResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartJobResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartJobResult)
    ], StartJobResponse.prototype, "startJobResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartJobResponse.prototype, "unauthorizedException", void 0);
    return StartJobResponse;
}(SpeakeasyBase));
export { StartJobResponse };
