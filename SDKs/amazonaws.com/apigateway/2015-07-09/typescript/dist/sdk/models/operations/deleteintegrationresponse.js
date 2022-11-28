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
var DeleteIntegrationResponsePathParams = /** @class */ (function (_super) {
    __extends(DeleteIntegrationResponsePathParams, _super);
    function DeleteIntegrationResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=http_method" }),
        __metadata("design:type", String)
    ], DeleteIntegrationResponsePathParams.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], DeleteIntegrationResponsePathParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], DeleteIntegrationResponsePathParams.prototype, "restapiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status_code" }),
        __metadata("design:type", String)
    ], DeleteIntegrationResponsePathParams.prototype, "statusCode", void 0);
    return DeleteIntegrationResponsePathParams;
}(SpeakeasyBase));
export { DeleteIntegrationResponsePathParams };
var DeleteIntegrationResponseHeaders = /** @class */ (function (_super) {
    __extends(DeleteIntegrationResponseHeaders, _super);
    function DeleteIntegrationResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteIntegrationResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteIntegrationResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteIntegrationResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteIntegrationResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteIntegrationResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteIntegrationResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteIntegrationResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteIntegrationResponseHeaders;
}(SpeakeasyBase));
export { DeleteIntegrationResponseHeaders };
var DeleteIntegrationResponseRequest = /** @class */ (function (_super) {
    __extends(DeleteIntegrationResponseRequest, _super);
    function DeleteIntegrationResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteIntegrationResponsePathParams)
    ], DeleteIntegrationResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteIntegrationResponseHeaders)
    ], DeleteIntegrationResponseRequest.prototype, "headers", void 0);
    return DeleteIntegrationResponseRequest;
}(SpeakeasyBase));
export { DeleteIntegrationResponseRequest };
var DeleteIntegrationResponseResponse = /** @class */ (function (_super) {
    __extends(DeleteIntegrationResponseResponse, _super);
    function DeleteIntegrationResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteIntegrationResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteIntegrationResponseResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteIntegrationResponseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteIntegrationResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteIntegrationResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteIntegrationResponseResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteIntegrationResponseResponse.prototype, "unauthorizedException", void 0);
    return DeleteIntegrationResponseResponse;
}(SpeakeasyBase));
export { DeleteIntegrationResponseResponse };
