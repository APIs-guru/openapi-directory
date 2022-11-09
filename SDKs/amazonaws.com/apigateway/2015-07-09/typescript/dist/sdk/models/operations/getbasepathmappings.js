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
var GetBasePathMappingsPathParams = /** @class */ (function (_super) {
    __extends(GetBasePathMappingsPathParams, _super);
    function GetBasePathMappingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=domain_name" }),
        __metadata("design:type", String)
    ], GetBasePathMappingsPathParams.prototype, "domainName", void 0);
    return GetBasePathMappingsPathParams;
}(SpeakeasyBase));
export { GetBasePathMappingsPathParams };
var GetBasePathMappingsQueryParams = /** @class */ (function (_super) {
    __extends(GetBasePathMappingsQueryParams, _super);
    function GetBasePathMappingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetBasePathMappingsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=position" }),
        __metadata("design:type", String)
    ], GetBasePathMappingsQueryParams.prototype, "position", void 0);
    return GetBasePathMappingsQueryParams;
}(SpeakeasyBase));
export { GetBasePathMappingsQueryParams };
var GetBasePathMappingsHeaders = /** @class */ (function (_super) {
    __extends(GetBasePathMappingsHeaders, _super);
    function GetBasePathMappingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBasePathMappingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBasePathMappingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBasePathMappingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBasePathMappingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBasePathMappingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBasePathMappingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBasePathMappingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBasePathMappingsHeaders;
}(SpeakeasyBase));
export { GetBasePathMappingsHeaders };
var GetBasePathMappingsRequest = /** @class */ (function (_super) {
    __extends(GetBasePathMappingsRequest, _super);
    function GetBasePathMappingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetBasePathMappingsPathParams)
    ], GetBasePathMappingsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBasePathMappingsQueryParams)
    ], GetBasePathMappingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetBasePathMappingsHeaders)
    ], GetBasePathMappingsRequest.prototype, "headers", void 0);
    return GetBasePathMappingsRequest;
}(SpeakeasyBase));
export { GetBasePathMappingsRequest };
var GetBasePathMappingsResponse = /** @class */ (function (_super) {
    __extends(GetBasePathMappingsResponse, _super);
    function GetBasePathMappingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetBasePathMappingsResponse.prototype, "badRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BasePathMappings)
    ], GetBasePathMappingsResponse.prototype, "basePathMappings", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetBasePathMappingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetBasePathMappingsResponse.prototype, "notFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetBasePathMappingsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetBasePathMappingsResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetBasePathMappingsResponse.prototype, "unauthorizedException", void 0);
    return GetBasePathMappingsResponse;
}(SpeakeasyBase));
export { GetBasePathMappingsResponse };
