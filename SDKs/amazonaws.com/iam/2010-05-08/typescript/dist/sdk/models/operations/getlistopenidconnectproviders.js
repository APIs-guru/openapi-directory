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
export var GetListOpenIdConnectProvidersActionEnum;
(function (GetListOpenIdConnectProvidersActionEnum) {
    GetListOpenIdConnectProvidersActionEnum["ListOpenIdConnectProviders"] = "ListOpenIDConnectProviders";
})(GetListOpenIdConnectProvidersActionEnum || (GetListOpenIdConnectProvidersActionEnum = {}));
export var GetListOpenIdConnectProvidersVersionEnum;
(function (GetListOpenIdConnectProvidersVersionEnum) {
    GetListOpenIdConnectProvidersVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListOpenIdConnectProvidersVersionEnum || (GetListOpenIdConnectProvidersVersionEnum = {}));
var GetListOpenIdConnectProvidersQueryParams = /** @class */ (function (_super) {
    __extends(GetListOpenIdConnectProvidersQueryParams, _super);
    function GetListOpenIdConnectProvidersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProvidersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProvidersQueryParams.prototype, "version", void 0);
    return GetListOpenIdConnectProvidersQueryParams;
}(SpeakeasyBase));
export { GetListOpenIdConnectProvidersQueryParams };
var GetListOpenIdConnectProvidersHeaders = /** @class */ (function (_super) {
    __extends(GetListOpenIdConnectProvidersHeaders, _super);
    function GetListOpenIdConnectProvidersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProvidersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProvidersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProvidersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProvidersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProvidersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProvidersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProvidersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListOpenIdConnectProvidersHeaders;
}(SpeakeasyBase));
export { GetListOpenIdConnectProvidersHeaders };
var GetListOpenIdConnectProvidersRequest = /** @class */ (function (_super) {
    __extends(GetListOpenIdConnectProvidersRequest, _super);
    function GetListOpenIdConnectProvidersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListOpenIdConnectProvidersQueryParams)
    ], GetListOpenIdConnectProvidersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListOpenIdConnectProvidersHeaders)
    ], GetListOpenIdConnectProvidersRequest.prototype, "headers", void 0);
    return GetListOpenIdConnectProvidersRequest;
}(SpeakeasyBase));
export { GetListOpenIdConnectProvidersRequest };
var GetListOpenIdConnectProvidersResponse = /** @class */ (function (_super) {
    __extends(GetListOpenIdConnectProvidersResponse, _super);
    function GetListOpenIdConnectProvidersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetListOpenIdConnectProvidersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProvidersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListOpenIdConnectProvidersResponse.prototype, "statusCode", void 0);
    return GetListOpenIdConnectProvidersResponse;
}(SpeakeasyBase));
export { GetListOpenIdConnectProvidersResponse };
