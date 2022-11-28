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
var PutIntegrationResponsePathParams = /** @class */ (function (_super) {
    __extends(PutIntegrationResponsePathParams, _super);
    function PutIntegrationResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=http_method" }),
        __metadata("design:type", String)
    ], PutIntegrationResponsePathParams.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], PutIntegrationResponsePathParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], PutIntegrationResponsePathParams.prototype, "restapiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status_code" }),
        __metadata("design:type", String)
    ], PutIntegrationResponsePathParams.prototype, "statusCode", void 0);
    return PutIntegrationResponsePathParams;
}(SpeakeasyBase));
export { PutIntegrationResponsePathParams };
var PutIntegrationResponseHeaders = /** @class */ (function (_super) {
    __extends(PutIntegrationResponseHeaders, _super);
    function PutIntegrationResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutIntegrationResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutIntegrationResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutIntegrationResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutIntegrationResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutIntegrationResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutIntegrationResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutIntegrationResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutIntegrationResponseHeaders;
}(SpeakeasyBase));
export { PutIntegrationResponseHeaders };
export var PutIntegrationResponseRequestBodyContentHandlingEnum;
(function (PutIntegrationResponseRequestBodyContentHandlingEnum) {
    PutIntegrationResponseRequestBodyContentHandlingEnum["ConvertToBinary"] = "CONVERT_TO_BINARY";
    PutIntegrationResponseRequestBodyContentHandlingEnum["ConvertToText"] = "CONVERT_TO_TEXT";
})(PutIntegrationResponseRequestBodyContentHandlingEnum || (PutIntegrationResponseRequestBodyContentHandlingEnum = {}));
var PutIntegrationResponseRequestBody = /** @class */ (function (_super) {
    __extends(PutIntegrationResponseRequestBody, _super);
    function PutIntegrationResponseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentHandling" }),
        __metadata("design:type", String)
    ], PutIntegrationResponseRequestBody.prototype, "contentHandling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseParameters" }),
        __metadata("design:type", Map)
    ], PutIntegrationResponseRequestBody.prototype, "responseParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseTemplates" }),
        __metadata("design:type", Map)
    ], PutIntegrationResponseRequestBody.prototype, "responseTemplates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectionPattern" }),
        __metadata("design:type", String)
    ], PutIntegrationResponseRequestBody.prototype, "selectionPattern", void 0);
    return PutIntegrationResponseRequestBody;
}(SpeakeasyBase));
export { PutIntegrationResponseRequestBody };
var PutIntegrationResponseRequest = /** @class */ (function (_super) {
    __extends(PutIntegrationResponseRequest, _super);
    function PutIntegrationResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutIntegrationResponsePathParams)
    ], PutIntegrationResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutIntegrationResponseHeaders)
    ], PutIntegrationResponseRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutIntegrationResponseRequestBody)
    ], PutIntegrationResponseRequest.prototype, "request", void 0);
    return PutIntegrationResponseRequest;
}(SpeakeasyBase));
export { PutIntegrationResponseRequest };
var PutIntegrationResponseResponse = /** @class */ (function (_super) {
    __extends(PutIntegrationResponseResponse, _super);
    function PutIntegrationResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponseResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutIntegrationResponseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IntegrationResponse)
    ], PutIntegrationResponseResponse.prototype, "integrationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponseResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutIntegrationResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponseResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutIntegrationResponseResponse.prototype, "unauthorizedException", void 0);
    return PutIntegrationResponseResponse;
}(SpeakeasyBase));
export { PutIntegrationResponseResponse };
