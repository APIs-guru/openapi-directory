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
export var GetGatewayResponseResponseTypeEnum;
(function (GetGatewayResponseResponseTypeEnum) {
    GetGatewayResponseResponseTypeEnum["Default4Xx"] = "DEFAULT_4XX";
    GetGatewayResponseResponseTypeEnum["Default5Xx"] = "DEFAULT_5XX";
    GetGatewayResponseResponseTypeEnum["ResourceNotFound"] = "RESOURCE_NOT_FOUND";
    GetGatewayResponseResponseTypeEnum["Unauthorized"] = "UNAUTHORIZED";
    GetGatewayResponseResponseTypeEnum["InvalidApiKey"] = "INVALID_API_KEY";
    GetGatewayResponseResponseTypeEnum["AccessDenied"] = "ACCESS_DENIED";
    GetGatewayResponseResponseTypeEnum["AuthorizerFailure"] = "AUTHORIZER_FAILURE";
    GetGatewayResponseResponseTypeEnum["AuthorizerConfigurationError"] = "AUTHORIZER_CONFIGURATION_ERROR";
    GetGatewayResponseResponseTypeEnum["InvalidSignature"] = "INVALID_SIGNATURE";
    GetGatewayResponseResponseTypeEnum["ExpiredToken"] = "EXPIRED_TOKEN";
    GetGatewayResponseResponseTypeEnum["MissingAuthenticationToken"] = "MISSING_AUTHENTICATION_TOKEN";
    GetGatewayResponseResponseTypeEnum["IntegrationFailure"] = "INTEGRATION_FAILURE";
    GetGatewayResponseResponseTypeEnum["IntegrationTimeout"] = "INTEGRATION_TIMEOUT";
    GetGatewayResponseResponseTypeEnum["ApiConfigurationError"] = "API_CONFIGURATION_ERROR";
    GetGatewayResponseResponseTypeEnum["UnsupportedMediaType"] = "UNSUPPORTED_MEDIA_TYPE";
    GetGatewayResponseResponseTypeEnum["BadRequestParameters"] = "BAD_REQUEST_PARAMETERS";
    GetGatewayResponseResponseTypeEnum["BadRequestBody"] = "BAD_REQUEST_BODY";
    GetGatewayResponseResponseTypeEnum["RequestTooLarge"] = "REQUEST_TOO_LARGE";
    GetGatewayResponseResponseTypeEnum["Throttled"] = "THROTTLED";
    GetGatewayResponseResponseTypeEnum["QuotaExceeded"] = "QUOTA_EXCEEDED";
    GetGatewayResponseResponseTypeEnum["WafFiltered"] = "WAF_FILTERED";
})(GetGatewayResponseResponseTypeEnum || (GetGatewayResponseResponseTypeEnum = {}));
var GetGatewayResponsePathParams = /** @class */ (function (_super) {
    __extends(GetGatewayResponsePathParams, _super);
    function GetGatewayResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=response_type" }),
        __metadata("design:type", String)
    ], GetGatewayResponsePathParams.prototype, "responseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], GetGatewayResponsePathParams.prototype, "restapiId", void 0);
    return GetGatewayResponsePathParams;
}(SpeakeasyBase));
export { GetGatewayResponsePathParams };
var GetGatewayResponseHeaders = /** @class */ (function (_super) {
    __extends(GetGatewayResponseHeaders, _super);
    function GetGatewayResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGatewayResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGatewayResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGatewayResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGatewayResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGatewayResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGatewayResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGatewayResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGatewayResponseHeaders;
}(SpeakeasyBase));
export { GetGatewayResponseHeaders };
var GetGatewayResponseRequest = /** @class */ (function (_super) {
    __extends(GetGatewayResponseRequest, _super);
    function GetGatewayResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGatewayResponsePathParams)
    ], GetGatewayResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGatewayResponseHeaders)
    ], GetGatewayResponseRequest.prototype, "headers", void 0);
    return GetGatewayResponseRequest;
}(SpeakeasyBase));
export { GetGatewayResponseRequest };
var GetGatewayResponseResponse = /** @class */ (function (_super) {
    __extends(GetGatewayResponseResponse, _super);
    function GetGatewayResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetGatewayResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGatewayResponseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GatewayResponse)
    ], GetGatewayResponseResponse.prototype, "gatewayResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetGatewayResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGatewayResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetGatewayResponseResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetGatewayResponseResponse.prototype, "unauthorizedException", void 0);
    return GetGatewayResponseResponse;
}(SpeakeasyBase));
export { GetGatewayResponseResponse };
