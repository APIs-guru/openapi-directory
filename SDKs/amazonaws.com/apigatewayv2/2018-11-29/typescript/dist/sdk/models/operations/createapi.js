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
var CreateApiHeaders = /** @class */ (function (_super) {
    __extends(CreateApiHeaders, _super);
    function CreateApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateApiHeaders;
}(SpeakeasyBase));
export { CreateApiHeaders };
// CreateApiRequestBodyCorsConfiguration
/**
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
var CreateApiRequestBodyCorsConfiguration = /** @class */ (function (_super) {
    __extends(CreateApiRequestBodyCorsConfiguration, _super);
    function CreateApiRequestBodyCorsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowCredentials" }),
        __metadata("design:type", Boolean)
    ], CreateApiRequestBodyCorsConfiguration.prototype, "allowCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowHeaders" }),
        __metadata("design:type", Array)
    ], CreateApiRequestBodyCorsConfiguration.prototype, "allowHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowMethods" }),
        __metadata("design:type", Array)
    ], CreateApiRequestBodyCorsConfiguration.prototype, "allowMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowOrigins" }),
        __metadata("design:type", Array)
    ], CreateApiRequestBodyCorsConfiguration.prototype, "allowOrigins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExposeHeaders" }),
        __metadata("design:type", Array)
    ], CreateApiRequestBodyCorsConfiguration.prototype, "exposeHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAge" }),
        __metadata("design:type", Number)
    ], CreateApiRequestBodyCorsConfiguration.prototype, "maxAge", void 0);
    return CreateApiRequestBodyCorsConfiguration;
}(SpeakeasyBase));
export { CreateApiRequestBodyCorsConfiguration };
export var CreateApiRequestBodyProtocolTypeEnum;
(function (CreateApiRequestBodyProtocolTypeEnum) {
    CreateApiRequestBodyProtocolTypeEnum["Websocket"] = "WEBSOCKET";
    CreateApiRequestBodyProtocolTypeEnum["Http"] = "HTTP";
})(CreateApiRequestBodyProtocolTypeEnum || (CreateApiRequestBodyProtocolTypeEnum = {}));
var CreateApiRequestBody = /** @class */ (function (_super) {
    __extends(CreateApiRequestBody, _super);
    function CreateApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKeySelectionExpression" }),
        __metadata("design:type", String)
    ], CreateApiRequestBody.prototype, "apiKeySelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=corsConfiguration" }),
        __metadata("design:type", CreateApiRequestBodyCorsConfiguration)
    ], CreateApiRequestBody.prototype, "corsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentialsArn" }),
        __metadata("design:type", String)
    ], CreateApiRequestBody.prototype, "credentialsArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateApiRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableExecuteApiEndpoint" }),
        __metadata("design:type", Boolean)
    ], CreateApiRequestBody.prototype, "disableExecuteApiEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableSchemaValidation" }),
        __metadata("design:type", Boolean)
    ], CreateApiRequestBody.prototype, "disableSchemaValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateApiRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocolType" }),
        __metadata("design:type", String)
    ], CreateApiRequestBody.prototype, "protocolType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeKey" }),
        __metadata("design:type", String)
    ], CreateApiRequestBody.prototype, "routeKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeSelectionExpression" }),
        __metadata("design:type", String)
    ], CreateApiRequestBody.prototype, "routeSelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateApiRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], CreateApiRequestBody.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateApiRequestBody.prototype, "version", void 0);
    return CreateApiRequestBody;
}(SpeakeasyBase));
export { CreateApiRequestBody };
var CreateApiRequest = /** @class */ (function (_super) {
    __extends(CreateApiRequest, _super);
    function CreateApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiHeaders)
    ], CreateApiRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateApiRequestBody)
    ], CreateApiRequest.prototype, "request", void 0);
    return CreateApiRequest;
}(SpeakeasyBase));
export { CreateApiRequest };
var CreateApiResponse = /** @class */ (function (_super) {
    __extends(CreateApiResponse, _super);
    function CreateApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateApiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateApiResponse)
    ], CreateApiResponse.prototype, "createApiResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateApiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApiResponse.prototype, "tooManyRequestsException", void 0);
    return CreateApiResponse;
}(SpeakeasyBase));
export { CreateApiResponse };
