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
export var DeleteGatewayResponseResponseTypeEnum;
(function (DeleteGatewayResponseResponseTypeEnum) {
    DeleteGatewayResponseResponseTypeEnum["Default4Xx"] = "DEFAULT_4XX";
    DeleteGatewayResponseResponseTypeEnum["Default5Xx"] = "DEFAULT_5XX";
    DeleteGatewayResponseResponseTypeEnum["ResourceNotFound"] = "RESOURCE_NOT_FOUND";
    DeleteGatewayResponseResponseTypeEnum["Unauthorized"] = "UNAUTHORIZED";
    DeleteGatewayResponseResponseTypeEnum["InvalidApiKey"] = "INVALID_API_KEY";
    DeleteGatewayResponseResponseTypeEnum["AccessDenied"] = "ACCESS_DENIED";
    DeleteGatewayResponseResponseTypeEnum["AuthorizerFailure"] = "AUTHORIZER_FAILURE";
    DeleteGatewayResponseResponseTypeEnum["AuthorizerConfigurationError"] = "AUTHORIZER_CONFIGURATION_ERROR";
    DeleteGatewayResponseResponseTypeEnum["InvalidSignature"] = "INVALID_SIGNATURE";
    DeleteGatewayResponseResponseTypeEnum["ExpiredToken"] = "EXPIRED_TOKEN";
    DeleteGatewayResponseResponseTypeEnum["MissingAuthenticationToken"] = "MISSING_AUTHENTICATION_TOKEN";
    DeleteGatewayResponseResponseTypeEnum["IntegrationFailure"] = "INTEGRATION_FAILURE";
    DeleteGatewayResponseResponseTypeEnum["IntegrationTimeout"] = "INTEGRATION_TIMEOUT";
    DeleteGatewayResponseResponseTypeEnum["ApiConfigurationError"] = "API_CONFIGURATION_ERROR";
    DeleteGatewayResponseResponseTypeEnum["UnsupportedMediaType"] = "UNSUPPORTED_MEDIA_TYPE";
    DeleteGatewayResponseResponseTypeEnum["BadRequestParameters"] = "BAD_REQUEST_PARAMETERS";
    DeleteGatewayResponseResponseTypeEnum["BadRequestBody"] = "BAD_REQUEST_BODY";
    DeleteGatewayResponseResponseTypeEnum["RequestTooLarge"] = "REQUEST_TOO_LARGE";
    DeleteGatewayResponseResponseTypeEnum["Throttled"] = "THROTTLED";
    DeleteGatewayResponseResponseTypeEnum["QuotaExceeded"] = "QUOTA_EXCEEDED";
    DeleteGatewayResponseResponseTypeEnum["WafFiltered"] = "WAF_FILTERED";
})(DeleteGatewayResponseResponseTypeEnum || (DeleteGatewayResponseResponseTypeEnum = {}));
var DeleteGatewayResponsePathParams = /** @class */ (function (_super) {
    __extends(DeleteGatewayResponsePathParams, _super);
    function DeleteGatewayResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=response_type" }),
        __metadata("design:type", String)
    ], DeleteGatewayResponsePathParams.prototype, "responseType", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], DeleteGatewayResponsePathParams.prototype, "restapiId", void 0);
    return DeleteGatewayResponsePathParams;
}(SpeakeasyBase));
export { DeleteGatewayResponsePathParams };
var DeleteGatewayResponseHeaders = /** @class */ (function (_super) {
    __extends(DeleteGatewayResponseHeaders, _super);
    function DeleteGatewayResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteGatewayResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteGatewayResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteGatewayResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteGatewayResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteGatewayResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteGatewayResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteGatewayResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteGatewayResponseHeaders;
}(SpeakeasyBase));
export { DeleteGatewayResponseHeaders };
var DeleteGatewayResponseRequest = /** @class */ (function (_super) {
    __extends(DeleteGatewayResponseRequest, _super);
    function DeleteGatewayResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteGatewayResponsePathParams)
    ], DeleteGatewayResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteGatewayResponseHeaders)
    ], DeleteGatewayResponseRequest.prototype, "headers", void 0);
    return DeleteGatewayResponseRequest;
}(SpeakeasyBase));
export { DeleteGatewayResponseRequest };
var DeleteGatewayResponseResponse = /** @class */ (function (_super) {
    __extends(DeleteGatewayResponseResponse, _super);
    function DeleteGatewayResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteGatewayResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteGatewayResponseResponse.prototype, "conflictException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteGatewayResponseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteGatewayResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteGatewayResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteGatewayResponseResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteGatewayResponseResponse.prototype, "unauthorizedException", void 0);
    return DeleteGatewayResponseResponse;
}(SpeakeasyBase));
export { DeleteGatewayResponseResponse };
