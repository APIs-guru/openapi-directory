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
var GetIntegrationResponsePathParams = /** @class */ (function (_super) {
    __extends(GetIntegrationResponsePathParams, _super);
    function GetIntegrationResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=http_method" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsePathParams.prototype, "httpMethod", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsePathParams.prototype, "resourceId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsePathParams.prototype, "restapiId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=status_code" }),
        __metadata("design:type", String)
    ], GetIntegrationResponsePathParams.prototype, "statusCode", void 0);
    return GetIntegrationResponsePathParams;
}(SpeakeasyBase));
export { GetIntegrationResponsePathParams };
var GetIntegrationResponseHeaders = /** @class */ (function (_super) {
    __extends(GetIntegrationResponseHeaders, _super);
    function GetIntegrationResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetIntegrationResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetIntegrationResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetIntegrationResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetIntegrationResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetIntegrationResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetIntegrationResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetIntegrationResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetIntegrationResponseHeaders;
}(SpeakeasyBase));
export { GetIntegrationResponseHeaders };
var GetIntegrationResponseRequest = /** @class */ (function (_super) {
    __extends(GetIntegrationResponseRequest, _super);
    function GetIntegrationResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetIntegrationResponsePathParams)
    ], GetIntegrationResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetIntegrationResponseHeaders)
    ], GetIntegrationResponseRequest.prototype, "headers", void 0);
    return GetIntegrationResponseRequest;
}(SpeakeasyBase));
export { GetIntegrationResponseRequest };
var GetIntegrationResponseResponse = /** @class */ (function (_super) {
    __extends(GetIntegrationResponseResponse, _super);
    function GetIntegrationResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetIntegrationResponseResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetIntegrationResponseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.IntegrationResponse)
    ], GetIntegrationResponseResponse.prototype, "integrationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetIntegrationResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetIntegrationResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetIntegrationResponseResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetIntegrationResponseResponse.prototype, "unauthorizedException", void 0);
    return GetIntegrationResponseResponse;
}(SpeakeasyBase));
export { GetIntegrationResponseResponse };
