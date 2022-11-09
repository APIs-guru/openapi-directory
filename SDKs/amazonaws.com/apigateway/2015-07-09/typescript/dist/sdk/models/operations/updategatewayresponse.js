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
export var UpdateGatewayResponseResponseTypeEnum;
(function (UpdateGatewayResponseResponseTypeEnum) {
    UpdateGatewayResponseResponseTypeEnum["Default4Xx"] = "DEFAULT_4XX";
    UpdateGatewayResponseResponseTypeEnum["Default5Xx"] = "DEFAULT_5XX";
    UpdateGatewayResponseResponseTypeEnum["ResourceNotFound"] = "RESOURCE_NOT_FOUND";
    UpdateGatewayResponseResponseTypeEnum["Unauthorized"] = "UNAUTHORIZED";
    UpdateGatewayResponseResponseTypeEnum["InvalidApiKey"] = "INVALID_API_KEY";
    UpdateGatewayResponseResponseTypeEnum["AccessDenied"] = "ACCESS_DENIED";
    UpdateGatewayResponseResponseTypeEnum["AuthorizerFailure"] = "AUTHORIZER_FAILURE";
    UpdateGatewayResponseResponseTypeEnum["AuthorizerConfigurationError"] = "AUTHORIZER_CONFIGURATION_ERROR";
    UpdateGatewayResponseResponseTypeEnum["InvalidSignature"] = "INVALID_SIGNATURE";
    UpdateGatewayResponseResponseTypeEnum["ExpiredToken"] = "EXPIRED_TOKEN";
    UpdateGatewayResponseResponseTypeEnum["MissingAuthenticationToken"] = "MISSING_AUTHENTICATION_TOKEN";
    UpdateGatewayResponseResponseTypeEnum["IntegrationFailure"] = "INTEGRATION_FAILURE";
    UpdateGatewayResponseResponseTypeEnum["IntegrationTimeout"] = "INTEGRATION_TIMEOUT";
    UpdateGatewayResponseResponseTypeEnum["ApiConfigurationError"] = "API_CONFIGURATION_ERROR";
    UpdateGatewayResponseResponseTypeEnum["UnsupportedMediaType"] = "UNSUPPORTED_MEDIA_TYPE";
    UpdateGatewayResponseResponseTypeEnum["BadRequestParameters"] = "BAD_REQUEST_PARAMETERS";
    UpdateGatewayResponseResponseTypeEnum["BadRequestBody"] = "BAD_REQUEST_BODY";
    UpdateGatewayResponseResponseTypeEnum["RequestTooLarge"] = "REQUEST_TOO_LARGE";
    UpdateGatewayResponseResponseTypeEnum["Throttled"] = "THROTTLED";
    UpdateGatewayResponseResponseTypeEnum["QuotaExceeded"] = "QUOTA_EXCEEDED";
    UpdateGatewayResponseResponseTypeEnum["WafFiltered"] = "WAF_FILTERED";
})(UpdateGatewayResponseResponseTypeEnum || (UpdateGatewayResponseResponseTypeEnum = {}));
var UpdateGatewayResponsePathParams = /** @class */ (function (_super) {
    __extends(UpdateGatewayResponsePathParams, _super);
    function UpdateGatewayResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=response_type" }),
        __metadata("design:type", String)
    ], UpdateGatewayResponsePathParams.prototype, "responseType", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], UpdateGatewayResponsePathParams.prototype, "restapiId", void 0);
    return UpdateGatewayResponsePathParams;
}(SpeakeasyBase));
export { UpdateGatewayResponsePathParams };
var UpdateGatewayResponseHeaders = /** @class */ (function (_super) {
    __extends(UpdateGatewayResponseHeaders, _super);
    function UpdateGatewayResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateGatewayResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateGatewayResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateGatewayResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateGatewayResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateGatewayResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateGatewayResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateGatewayResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateGatewayResponseHeaders;
}(SpeakeasyBase));
export { UpdateGatewayResponseHeaders };
var UpdateGatewayResponseRequestBody = /** @class */ (function (_super) {
    __extends(UpdateGatewayResponseRequestBody, _super);
    function UpdateGatewayResponseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=patchOperations", elemType: shared.PatchOperation }),
        __metadata("design:type", Array)
    ], UpdateGatewayResponseRequestBody.prototype, "patchOperations", void 0);
    return UpdateGatewayResponseRequestBody;
}(SpeakeasyBase));
export { UpdateGatewayResponseRequestBody };
var UpdateGatewayResponseRequest = /** @class */ (function (_super) {
    __extends(UpdateGatewayResponseRequest, _super);
    function UpdateGatewayResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateGatewayResponsePathParams)
    ], UpdateGatewayResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateGatewayResponseHeaders)
    ], UpdateGatewayResponseRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateGatewayResponseRequestBody)
    ], UpdateGatewayResponseRequest.prototype, "request", void 0);
    return UpdateGatewayResponseRequest;
}(SpeakeasyBase));
export { UpdateGatewayResponseRequest };
var UpdateGatewayResponseResponse = /** @class */ (function (_super) {
    __extends(UpdateGatewayResponseResponse, _super);
    function UpdateGatewayResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayResponseResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateGatewayResponseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GatewayResponse)
    ], UpdateGatewayResponseResponse.prototype, "gatewayResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayResponseResponse.prototype, "limitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateGatewayResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayResponseResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateGatewayResponseResponse.prototype, "unauthorizedException", void 0);
    return UpdateGatewayResponseResponse;
}(SpeakeasyBase));
export { UpdateGatewayResponseResponse };
