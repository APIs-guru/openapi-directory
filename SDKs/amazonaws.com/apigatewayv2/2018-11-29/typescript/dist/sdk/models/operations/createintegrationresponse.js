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
var CreateIntegrationResponsePathParams = /** @class */ (function (_super) {
    __extends(CreateIntegrationResponsePathParams, _super);
    function CreateIntegrationResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponsePathParams.prototype, "apiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationId" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponsePathParams.prototype, "integrationId", void 0);
    return CreateIntegrationResponsePathParams;
}(SpeakeasyBase));
export { CreateIntegrationResponsePathParams };
var CreateIntegrationResponseHeaders = /** @class */ (function (_super) {
    __extends(CreateIntegrationResponseHeaders, _super);
    function CreateIntegrationResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateIntegrationResponseHeaders;
}(SpeakeasyBase));
export { CreateIntegrationResponseHeaders };
export var CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum;
(function (CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum) {
    CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum["ConvertToBinary"] = "CONVERT_TO_BINARY";
    CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum["ConvertToText"] = "CONVERT_TO_TEXT";
})(CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum || (CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum = {}));
var CreateIntegrationResponseRequestBody = /** @class */ (function (_super) {
    __extends(CreateIntegrationResponseRequestBody, _super);
    function CreateIntegrationResponseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentHandlingStrategy" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponseRequestBody.prototype, "contentHandlingStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationResponseKey" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponseRequestBody.prototype, "integrationResponseKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseParameters" }),
        __metadata("design:type", Map)
    ], CreateIntegrationResponseRequestBody.prototype, "responseParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseTemplates" }),
        __metadata("design:type", Map)
    ], CreateIntegrationResponseRequestBody.prototype, "responseTemplates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateSelectionExpression" }),
        __metadata("design:type", String)
    ], CreateIntegrationResponseRequestBody.prototype, "templateSelectionExpression", void 0);
    return CreateIntegrationResponseRequestBody;
}(SpeakeasyBase));
export { CreateIntegrationResponseRequestBody };
var CreateIntegrationResponseRequest = /** @class */ (function (_super) {
    __extends(CreateIntegrationResponseRequest, _super);
    function CreateIntegrationResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateIntegrationResponsePathParams)
    ], CreateIntegrationResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateIntegrationResponseHeaders)
    ], CreateIntegrationResponseRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateIntegrationResponseRequestBody)
    ], CreateIntegrationResponseRequest.prototype, "request", void 0);
    return CreateIntegrationResponseRequest;
}(SpeakeasyBase));
export { CreateIntegrationResponseRequest };
var CreateIntegrationResponseResponse = /** @class */ (function (_super) {
    __extends(CreateIntegrationResponseResponse, _super);
    function CreateIntegrationResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIntegrationResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIntegrationResponseResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateIntegrationResponseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateIntegrationResponseResponse)
    ], CreateIntegrationResponseResponse.prototype, "createIntegrationResponseResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIntegrationResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateIntegrationResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateIntegrationResponseResponse.prototype, "tooManyRequestsException", void 0);
    return CreateIntegrationResponseResponse;
}(SpeakeasyBase));
export { CreateIntegrationResponseResponse };
