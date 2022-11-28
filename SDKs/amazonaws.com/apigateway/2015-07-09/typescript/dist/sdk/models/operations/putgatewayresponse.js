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
export var PutGatewayResponseResponseTypeEnum;
(function (PutGatewayResponseResponseTypeEnum) {
    PutGatewayResponseResponseTypeEnum["Default4Xx"] = "DEFAULT_4XX";
    PutGatewayResponseResponseTypeEnum["Default5Xx"] = "DEFAULT_5XX";
    PutGatewayResponseResponseTypeEnum["ResourceNotFound"] = "RESOURCE_NOT_FOUND";
    PutGatewayResponseResponseTypeEnum["Unauthorized"] = "UNAUTHORIZED";
    PutGatewayResponseResponseTypeEnum["InvalidApiKey"] = "INVALID_API_KEY";
    PutGatewayResponseResponseTypeEnum["AccessDenied"] = "ACCESS_DENIED";
    PutGatewayResponseResponseTypeEnum["AuthorizerFailure"] = "AUTHORIZER_FAILURE";
    PutGatewayResponseResponseTypeEnum["AuthorizerConfigurationError"] = "AUTHORIZER_CONFIGURATION_ERROR";
    PutGatewayResponseResponseTypeEnum["InvalidSignature"] = "INVALID_SIGNATURE";
    PutGatewayResponseResponseTypeEnum["ExpiredToken"] = "EXPIRED_TOKEN";
    PutGatewayResponseResponseTypeEnum["MissingAuthenticationToken"] = "MISSING_AUTHENTICATION_TOKEN";
    PutGatewayResponseResponseTypeEnum["IntegrationFailure"] = "INTEGRATION_FAILURE";
    PutGatewayResponseResponseTypeEnum["IntegrationTimeout"] = "INTEGRATION_TIMEOUT";
    PutGatewayResponseResponseTypeEnum["ApiConfigurationError"] = "API_CONFIGURATION_ERROR";
    PutGatewayResponseResponseTypeEnum["UnsupportedMediaType"] = "UNSUPPORTED_MEDIA_TYPE";
    PutGatewayResponseResponseTypeEnum["BadRequestParameters"] = "BAD_REQUEST_PARAMETERS";
    PutGatewayResponseResponseTypeEnum["BadRequestBody"] = "BAD_REQUEST_BODY";
    PutGatewayResponseResponseTypeEnum["RequestTooLarge"] = "REQUEST_TOO_LARGE";
    PutGatewayResponseResponseTypeEnum["Throttled"] = "THROTTLED";
    PutGatewayResponseResponseTypeEnum["QuotaExceeded"] = "QUOTA_EXCEEDED";
    PutGatewayResponseResponseTypeEnum["WafFiltered"] = "WAF_FILTERED";
})(PutGatewayResponseResponseTypeEnum || (PutGatewayResponseResponseTypeEnum = {}));
var PutGatewayResponsePathParams = /** @class */ (function (_super) {
    __extends(PutGatewayResponsePathParams, _super);
    function PutGatewayResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=response_type" }),
        __metadata("design:type", String)
    ], PutGatewayResponsePathParams.prototype, "responseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], PutGatewayResponsePathParams.prototype, "restapiId", void 0);
    return PutGatewayResponsePathParams;
}(SpeakeasyBase));
export { PutGatewayResponsePathParams };
var PutGatewayResponseHeaders = /** @class */ (function (_super) {
    __extends(PutGatewayResponseHeaders, _super);
    function PutGatewayResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutGatewayResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutGatewayResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutGatewayResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutGatewayResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutGatewayResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutGatewayResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutGatewayResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutGatewayResponseHeaders;
}(SpeakeasyBase));
export { PutGatewayResponseHeaders };
var PutGatewayResponseRequestBody = /** @class */ (function (_super) {
    __extends(PutGatewayResponseRequestBody, _super);
    function PutGatewayResponseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseParameters" }),
        __metadata("design:type", Map)
    ], PutGatewayResponseRequestBody.prototype, "responseParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseTemplates" }),
        __metadata("design:type", Map)
    ], PutGatewayResponseRequestBody.prototype, "responseTemplates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusCode" }),
        __metadata("design:type", String)
    ], PutGatewayResponseRequestBody.prototype, "statusCode", void 0);
    return PutGatewayResponseRequestBody;
}(SpeakeasyBase));
export { PutGatewayResponseRequestBody };
var PutGatewayResponseRequest = /** @class */ (function (_super) {
    __extends(PutGatewayResponseRequest, _super);
    function PutGatewayResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutGatewayResponsePathParams)
    ], PutGatewayResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutGatewayResponseHeaders)
    ], PutGatewayResponseRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutGatewayResponseRequestBody)
    ], PutGatewayResponseRequest.prototype, "request", void 0);
    return PutGatewayResponseRequest;
}(SpeakeasyBase));
export { PutGatewayResponseRequest };
var PutGatewayResponseResponse = /** @class */ (function (_super) {
    __extends(PutGatewayResponseResponse, _super);
    function PutGatewayResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutGatewayResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutGatewayResponseResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutGatewayResponseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GatewayResponse)
    ], PutGatewayResponseResponse.prototype, "gatewayResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutGatewayResponseResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutGatewayResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutGatewayResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutGatewayResponseResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutGatewayResponseResponse.prototype, "unauthorizedException", void 0);
    return PutGatewayResponseResponse;
}(SpeakeasyBase));
export { PutGatewayResponseResponse };
