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
var SubmitFeedbackPathParams = /** @class */ (function (_super) {
    __extends(SubmitFeedbackPathParams, _super);
    function SubmitFeedbackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=anomalyInstanceId" }),
        __metadata("design:type", String)
    ], SubmitFeedbackPathParams.prototype, "anomalyInstanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" }),
        __metadata("design:type", String)
    ], SubmitFeedbackPathParams.prototype, "profilingGroupName", void 0);
    return SubmitFeedbackPathParams;
}(SpeakeasyBase));
export { SubmitFeedbackPathParams };
var SubmitFeedbackHeaders = /** @class */ (function (_super) {
    __extends(SubmitFeedbackHeaders, _super);
    function SubmitFeedbackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SubmitFeedbackHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SubmitFeedbackHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SubmitFeedbackHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SubmitFeedbackHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SubmitFeedbackHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SubmitFeedbackHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SubmitFeedbackHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SubmitFeedbackHeaders;
}(SpeakeasyBase));
export { SubmitFeedbackHeaders };
export var SubmitFeedbackRequestBodyTypeEnum;
(function (SubmitFeedbackRequestBodyTypeEnum) {
    SubmitFeedbackRequestBodyTypeEnum["Positive"] = "Positive";
    SubmitFeedbackRequestBodyTypeEnum["Negative"] = "Negative";
})(SubmitFeedbackRequestBodyTypeEnum || (SubmitFeedbackRequestBodyTypeEnum = {}));
var SubmitFeedbackRequestBody = /** @class */ (function (_super) {
    __extends(SubmitFeedbackRequestBody, _super);
    function SubmitFeedbackRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], SubmitFeedbackRequestBody.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SubmitFeedbackRequestBody.prototype, "type", void 0);
    return SubmitFeedbackRequestBody;
}(SpeakeasyBase));
export { SubmitFeedbackRequestBody };
var SubmitFeedbackRequest = /** @class */ (function (_super) {
    __extends(SubmitFeedbackRequest, _super);
    function SubmitFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubmitFeedbackPathParams)
    ], SubmitFeedbackRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubmitFeedbackHeaders)
    ], SubmitFeedbackRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SubmitFeedbackRequestBody)
    ], SubmitFeedbackRequest.prototype, "request", void 0);
    return SubmitFeedbackRequest;
}(SpeakeasyBase));
export { SubmitFeedbackRequest };
var SubmitFeedbackResponse = /** @class */ (function (_super) {
    __extends(SubmitFeedbackResponse, _super);
    function SubmitFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SubmitFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitFeedbackResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitFeedbackResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SubmitFeedbackResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SubmitFeedbackResponse.prototype, "submitFeedbackResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitFeedbackResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SubmitFeedbackResponse.prototype, "validationException", void 0);
    return SubmitFeedbackResponse;
}(SpeakeasyBase));
export { SubmitFeedbackResponse };
