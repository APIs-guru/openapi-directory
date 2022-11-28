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
var UpdateApiPathParams = /** @class */ (function (_super) {
    __extends(UpdateApiPathParams, _super);
    function UpdateApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], UpdateApiPathParams.prototype, "apiId", void 0);
    return UpdateApiPathParams;
}(SpeakeasyBase));
export { UpdateApiPathParams };
var UpdateApiHeaders = /** @class */ (function (_super) {
    __extends(UpdateApiHeaders, _super);
    function UpdateApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateApiHeaders;
}(SpeakeasyBase));
export { UpdateApiHeaders };
// UpdateApiRequestBodyCorsConfiguration
/**
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
var UpdateApiRequestBodyCorsConfiguration = /** @class */ (function (_super) {
    __extends(UpdateApiRequestBodyCorsConfiguration, _super);
    function UpdateApiRequestBodyCorsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowCredentials" }),
        __metadata("design:type", Boolean)
    ], UpdateApiRequestBodyCorsConfiguration.prototype, "allowCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowHeaders" }),
        __metadata("design:type", Array)
    ], UpdateApiRequestBodyCorsConfiguration.prototype, "allowHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowMethods" }),
        __metadata("design:type", Array)
    ], UpdateApiRequestBodyCorsConfiguration.prototype, "allowMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowOrigins" }),
        __metadata("design:type", Array)
    ], UpdateApiRequestBodyCorsConfiguration.prototype, "allowOrigins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExposeHeaders" }),
        __metadata("design:type", Array)
    ], UpdateApiRequestBodyCorsConfiguration.prototype, "exposeHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAge" }),
        __metadata("design:type", Number)
    ], UpdateApiRequestBodyCorsConfiguration.prototype, "maxAge", void 0);
    return UpdateApiRequestBodyCorsConfiguration;
}(SpeakeasyBase));
export { UpdateApiRequestBodyCorsConfiguration };
var UpdateApiRequestBody = /** @class */ (function (_super) {
    __extends(UpdateApiRequestBody, _super);
    function UpdateApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKeySelectionExpression" }),
        __metadata("design:type", String)
    ], UpdateApiRequestBody.prototype, "apiKeySelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=corsConfiguration" }),
        __metadata("design:type", UpdateApiRequestBodyCorsConfiguration)
    ], UpdateApiRequestBody.prototype, "corsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentialsArn" }),
        __metadata("design:type", String)
    ], UpdateApiRequestBody.prototype, "credentialsArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateApiRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableExecuteApiEndpoint" }),
        __metadata("design:type", Boolean)
    ], UpdateApiRequestBody.prototype, "disableExecuteApiEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableSchemaValidation" }),
        __metadata("design:type", Boolean)
    ], UpdateApiRequestBody.prototype, "disableSchemaValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateApiRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeKey" }),
        __metadata("design:type", String)
    ], UpdateApiRequestBody.prototype, "routeKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeSelectionExpression" }),
        __metadata("design:type", String)
    ], UpdateApiRequestBody.prototype, "routeSelectionExpression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], UpdateApiRequestBody.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], UpdateApiRequestBody.prototype, "version", void 0);
    return UpdateApiRequestBody;
}(SpeakeasyBase));
export { UpdateApiRequestBody };
var UpdateApiRequest = /** @class */ (function (_super) {
    __extends(UpdateApiRequest, _super);
    function UpdateApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApiPathParams)
    ], UpdateApiRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApiHeaders)
    ], UpdateApiRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateApiRequestBody)
    ], UpdateApiRequest.prototype, "request", void 0);
    return UpdateApiRequest;
}(SpeakeasyBase));
export { UpdateApiRequest };
var UpdateApiResponse = /** @class */ (function (_super) {
    __extends(UpdateApiResponse, _super);
    function UpdateApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateApiResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateApiResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApiResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateApiResponse)
    ], UpdateApiResponse.prototype, "updateApiResponse", void 0);
    return UpdateApiResponse;
}(SpeakeasyBase));
export { UpdateApiResponse };
