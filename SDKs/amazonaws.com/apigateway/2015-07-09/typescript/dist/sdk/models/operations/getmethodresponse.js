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
var GetMethodResponsePathParams = /** @class */ (function (_super) {
    __extends(GetMethodResponsePathParams, _super);
    function GetMethodResponsePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=http_method" }),
        __metadata("design:type", String)
    ], GetMethodResponsePathParams.prototype, "httpMethod", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource_id" }),
        __metadata("design:type", String)
    ], GetMethodResponsePathParams.prototype, "resourceId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" }),
        __metadata("design:type", String)
    ], GetMethodResponsePathParams.prototype, "restapiId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=status_code" }),
        __metadata("design:type", String)
    ], GetMethodResponsePathParams.prototype, "statusCode", void 0);
    return GetMethodResponsePathParams;
}(SpeakeasyBase));
export { GetMethodResponsePathParams };
var GetMethodResponseHeaders = /** @class */ (function (_super) {
    __extends(GetMethodResponseHeaders, _super);
    function GetMethodResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetMethodResponseHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetMethodResponseHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetMethodResponseHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetMethodResponseHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetMethodResponseHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetMethodResponseHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetMethodResponseHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetMethodResponseHeaders;
}(SpeakeasyBase));
export { GetMethodResponseHeaders };
var GetMethodResponseRequest = /** @class */ (function (_super) {
    __extends(GetMethodResponseRequest, _super);
    function GetMethodResponseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMethodResponsePathParams)
    ], GetMethodResponseRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMethodResponseHeaders)
    ], GetMethodResponseRequest.prototype, "headers", void 0);
    return GetMethodResponseRequest;
}(SpeakeasyBase));
export { GetMethodResponseRequest };
var GetMethodResponseResponse = /** @class */ (function (_super) {
    __extends(GetMethodResponseResponse, _super);
    function GetMethodResponseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMethodResponseResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MethodResponse)
    ], GetMethodResponseResponse.prototype, "methodResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMethodResponseResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMethodResponseResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMethodResponseResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetMethodResponseResponse.prototype, "unauthorizedException", void 0);
    return GetMethodResponseResponse;
}(SpeakeasyBase));
export { GetMethodResponseResponse };
