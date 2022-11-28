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
var UpdateIntegrationResponsePathParams = /** @class */ (function (_super) {
    __extends(UpdateIntegrationResponsePathParams, _super);
    function UpdateIntegrationResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=http_method" }),
        __metadata("design:type", String)
    ], UpdateIntegrationResponsePathParams.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], UpdateIntegrationResponsePathParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], UpdateIntegrationResponsePathParams.prototype, "restapiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status_code" }),
        __metadata("design:type", String)
    ], UpdateIntegrationResponsePathParams.prototype, "statusCode", void 0);
    return UpdateIntegrationResponsePathParams;
}(SpeakeasyBase));
export { UpdateIntegrationResponsePathParams };
var UpdateIntegrationResponseHeaders = /** @class */ (function (_super) {
    __extends(UpdateIntegrationResponseHeaders, _super);
    function UpdateIntegrationResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateIntegrationResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateIntegrationResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateIntegrationResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateIntegrationResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateIntegrationResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateIntegrationResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateIntegrationResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateIntegrationResponseHeaders;
}(SpeakeasyBase));
export { UpdateIntegrationResponseHeaders };
var UpdateIntegrationResponseRequestBody = /** @class */ (function (_super) {
    __extends(UpdateIntegrationResponseRequestBody, _super);
    function UpdateIntegrationResponseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patchOperations", elemType: shared.PatchOperation }),
        __metadata("design:type", Array)
    ], UpdateIntegrationResponseRequestBody.prototype, "patchOperations", void 0);
    return UpdateIntegrationResponseRequestBody;
}(SpeakeasyBase));
export { UpdateIntegrationResponseRequestBody };
var UpdateIntegrationResponseRequest = /** @class */ (function (_super) {
    __extends(UpdateIntegrationResponseRequest, _super);
    function UpdateIntegrationResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIntegrationResponsePathParams)
    ], UpdateIntegrationResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateIntegrationResponseHeaders)
    ], UpdateIntegrationResponseRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateIntegrationResponseRequestBody)
    ], UpdateIntegrationResponseRequest.prototype, "request", void 0);
    return UpdateIntegrationResponseRequest;
}(SpeakeasyBase));
export { UpdateIntegrationResponseRequest };
var UpdateIntegrationResponseResponse = /** @class */ (function (_super) {
    __extends(UpdateIntegrationResponseResponse, _super);
    function UpdateIntegrationResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntegrationResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntegrationResponseResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateIntegrationResponseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IntegrationResponse)
    ], UpdateIntegrationResponseResponse.prototype, "integrationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntegrationResponseResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntegrationResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateIntegrationResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntegrationResponseResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateIntegrationResponseResponse.prototype, "unauthorizedException", void 0);
    return UpdateIntegrationResponseResponse;
}(SpeakeasyBase));
export { UpdateIntegrationResponseResponse };
