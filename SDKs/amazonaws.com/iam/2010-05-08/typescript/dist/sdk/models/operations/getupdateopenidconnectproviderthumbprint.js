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
export var GetUpdateOpenIdConnectProviderThumbprintActionEnum;
(function (GetUpdateOpenIdConnectProviderThumbprintActionEnum) {
    GetUpdateOpenIdConnectProviderThumbprintActionEnum["UpdateOpenIdConnectProviderThumbprint"] = "UpdateOpenIDConnectProviderThumbprint";
})(GetUpdateOpenIdConnectProviderThumbprintActionEnum || (GetUpdateOpenIdConnectProviderThumbprintActionEnum = {}));
export var GetUpdateOpenIdConnectProviderThumbprintVersionEnum;
(function (GetUpdateOpenIdConnectProviderThumbprintVersionEnum) {
    GetUpdateOpenIdConnectProviderThumbprintVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUpdateOpenIdConnectProviderThumbprintVersionEnum || (GetUpdateOpenIdConnectProviderThumbprintVersionEnum = {}));
var GetUpdateOpenIdConnectProviderThumbprintQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateOpenIdConnectProviderThumbprintQueryParams, _super);
    function GetUpdateOpenIdConnectProviderThumbprintQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateOpenIdConnectProviderThumbprintQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" }),
        __metadata("design:type", String)
    ], GetUpdateOpenIdConnectProviderThumbprintQueryParams.prototype, "openIdConnectProviderArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ThumbprintList" }),
        __metadata("design:type", Array)
    ], GetUpdateOpenIdConnectProviderThumbprintQueryParams.prototype, "thumbprintList", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateOpenIdConnectProviderThumbprintQueryParams.prototype, "version", void 0);
    return GetUpdateOpenIdConnectProviderThumbprintQueryParams;
}(SpeakeasyBase));
export { GetUpdateOpenIdConnectProviderThumbprintQueryParams };
var GetUpdateOpenIdConnectProviderThumbprintHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateOpenIdConnectProviderThumbprintHeaders, _super);
    function GetUpdateOpenIdConnectProviderThumbprintHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateOpenIdConnectProviderThumbprintHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateOpenIdConnectProviderThumbprintHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateOpenIdConnectProviderThumbprintHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateOpenIdConnectProviderThumbprintHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateOpenIdConnectProviderThumbprintHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateOpenIdConnectProviderThumbprintHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateOpenIdConnectProviderThumbprintHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateOpenIdConnectProviderThumbprintHeaders;
}(SpeakeasyBase));
export { GetUpdateOpenIdConnectProviderThumbprintHeaders };
var GetUpdateOpenIdConnectProviderThumbprintRequest = /** @class */ (function (_super) {
    __extends(GetUpdateOpenIdConnectProviderThumbprintRequest, _super);
    function GetUpdateOpenIdConnectProviderThumbprintRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateOpenIdConnectProviderThumbprintQueryParams)
    ], GetUpdateOpenIdConnectProviderThumbprintRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateOpenIdConnectProviderThumbprintHeaders)
    ], GetUpdateOpenIdConnectProviderThumbprintRequest.prototype, "headers", void 0);
    return GetUpdateOpenIdConnectProviderThumbprintRequest;
}(SpeakeasyBase));
export { GetUpdateOpenIdConnectProviderThumbprintRequest };
var GetUpdateOpenIdConnectProviderThumbprintResponse = /** @class */ (function (_super) {
    __extends(GetUpdateOpenIdConnectProviderThumbprintResponse, _super);
    function GetUpdateOpenIdConnectProviderThumbprintResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateOpenIdConnectProviderThumbprintResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUpdateOpenIdConnectProviderThumbprintResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUpdateOpenIdConnectProviderThumbprintResponse.prototype, "statusCode", void 0);
    return GetUpdateOpenIdConnectProviderThumbprintResponse;
}(SpeakeasyBase));
export { GetUpdateOpenIdConnectProviderThumbprintResponse };
