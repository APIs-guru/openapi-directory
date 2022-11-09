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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var UpdateThingShadowPathParams = /** @class */ (function (_super) {
    __extends(UpdateThingShadowPathParams, _super);
    function UpdateThingShadowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=thingName" }),
        __metadata("design:type", String)
    ], UpdateThingShadowPathParams.prototype, "thingName", void 0);
    return UpdateThingShadowPathParams;
}(SpeakeasyBase));
export { UpdateThingShadowPathParams };
var UpdateThingShadowQueryParams = /** @class */ (function (_super) {
    __extends(UpdateThingShadowQueryParams, _super);
    function UpdateThingShadowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], UpdateThingShadowQueryParams.prototype, "name", void 0);
    return UpdateThingShadowQueryParams;
}(SpeakeasyBase));
export { UpdateThingShadowQueryParams };
var UpdateThingShadowHeaders = /** @class */ (function (_super) {
    __extends(UpdateThingShadowHeaders, _super);
    function UpdateThingShadowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateThingShadowHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateThingShadowHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateThingShadowHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateThingShadowHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateThingShadowHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateThingShadowHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateThingShadowHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateThingShadowHeaders;
}(SpeakeasyBase));
export { UpdateThingShadowHeaders };
var UpdateThingShadowRequestBody = /** @class */ (function (_super) {
    __extends(UpdateThingShadowRequestBody, _super);
    function UpdateThingShadowRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=payload" }),
        __metadata("design:type", String)
    ], UpdateThingShadowRequestBody.prototype, "payload", void 0);
    return UpdateThingShadowRequestBody;
}(SpeakeasyBase));
export { UpdateThingShadowRequestBody };
var UpdateThingShadowRequest = /** @class */ (function (_super) {
    __extends(UpdateThingShadowRequest, _super);
    function UpdateThingShadowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateThingShadowPathParams)
    ], UpdateThingShadowRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateThingShadowQueryParams)
    ], UpdateThingShadowRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateThingShadowHeaders)
    ], UpdateThingShadowRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateThingShadowRequestBody)
    ], UpdateThingShadowRequest.prototype, "request", void 0);
    return UpdateThingShadowRequest;
}(SpeakeasyBase));
export { UpdateThingShadowRequest };
var UpdateThingShadowResponse = /** @class */ (function (_super) {
    __extends(UpdateThingShadowResponse, _super);
    function UpdateThingShadowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateThingShadowResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateThingShadowResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateThingShadowResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateThingShadowResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateThingShadowResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateThingShadowResponse.prototype, "requestEntityTooLargeException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateThingShadowResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateThingShadowResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateThingShadowResponse.prototype, "throttlingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateThingShadowResponse.prototype, "unauthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateThingShadowResponse.prototype, "unsupportedDocumentEncodingException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateThingShadowResponse)
    ], UpdateThingShadowResponse.prototype, "updateThingShadowResponse", void 0);
    return UpdateThingShadowResponse;
}(SpeakeasyBase));
export { UpdateThingShadowResponse };
