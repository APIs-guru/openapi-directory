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
export var GetRemoveClientIdFromOpenIdConnectProviderActionEnum;
(function (GetRemoveClientIdFromOpenIdConnectProviderActionEnum) {
    GetRemoveClientIdFromOpenIdConnectProviderActionEnum["RemoveClientIdFromOpenIdConnectProvider"] = "RemoveClientIDFromOpenIDConnectProvider";
})(GetRemoveClientIdFromOpenIdConnectProviderActionEnum || (GetRemoveClientIdFromOpenIdConnectProviderActionEnum = {}));
export var GetRemoveClientIdFromOpenIdConnectProviderVersionEnum;
(function (GetRemoveClientIdFromOpenIdConnectProviderVersionEnum) {
    GetRemoveClientIdFromOpenIdConnectProviderVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetRemoveClientIdFromOpenIdConnectProviderVersionEnum || (GetRemoveClientIdFromOpenIdConnectProviderVersionEnum = {}));
var GetRemoveClientIdFromOpenIdConnectProviderQueryParams = /** @class */ (function (_super) {
    __extends(GetRemoveClientIdFromOpenIdConnectProviderQueryParams, _super);
    function GetRemoveClientIdFromOpenIdConnectProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientID" }),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderQueryParams.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" }),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderQueryParams.prototype, "openIdConnectProviderArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderQueryParams.prototype, "version", void 0);
    return GetRemoveClientIdFromOpenIdConnectProviderQueryParams;
}(SpeakeasyBase));
export { GetRemoveClientIdFromOpenIdConnectProviderQueryParams };
var GetRemoveClientIdFromOpenIdConnectProviderHeaders = /** @class */ (function (_super) {
    __extends(GetRemoveClientIdFromOpenIdConnectProviderHeaders, _super);
    function GetRemoveClientIdFromOpenIdConnectProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRemoveClientIdFromOpenIdConnectProviderHeaders;
}(SpeakeasyBase));
export { GetRemoveClientIdFromOpenIdConnectProviderHeaders };
var GetRemoveClientIdFromOpenIdConnectProviderRequest = /** @class */ (function (_super) {
    __extends(GetRemoveClientIdFromOpenIdConnectProviderRequest, _super);
    function GetRemoveClientIdFromOpenIdConnectProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemoveClientIdFromOpenIdConnectProviderQueryParams)
    ], GetRemoveClientIdFromOpenIdConnectProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRemoveClientIdFromOpenIdConnectProviderHeaders)
    ], GetRemoveClientIdFromOpenIdConnectProviderRequest.prototype, "headers", void 0);
    return GetRemoveClientIdFromOpenIdConnectProviderRequest;
}(SpeakeasyBase));
export { GetRemoveClientIdFromOpenIdConnectProviderRequest };
var GetRemoveClientIdFromOpenIdConnectProviderResponse = /** @class */ (function (_super) {
    __extends(GetRemoveClientIdFromOpenIdConnectProviderResponse, _super);
    function GetRemoveClientIdFromOpenIdConnectProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRemoveClientIdFromOpenIdConnectProviderResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRemoveClientIdFromOpenIdConnectProviderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRemoveClientIdFromOpenIdConnectProviderResponse.prototype, "statusCode", void 0);
    return GetRemoveClientIdFromOpenIdConnectProviderResponse;
}(SpeakeasyBase));
export { GetRemoveClientIdFromOpenIdConnectProviderResponse };
