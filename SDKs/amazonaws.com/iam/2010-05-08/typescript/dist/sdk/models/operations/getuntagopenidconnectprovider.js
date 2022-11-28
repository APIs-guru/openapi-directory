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
export var GetUntagOpenIdConnectProviderActionEnum;
(function (GetUntagOpenIdConnectProviderActionEnum) {
    GetUntagOpenIdConnectProviderActionEnum["UntagOpenIdConnectProvider"] = "UntagOpenIDConnectProvider";
})(GetUntagOpenIdConnectProviderActionEnum || (GetUntagOpenIdConnectProviderActionEnum = {}));
export var GetUntagOpenIdConnectProviderVersionEnum;
(function (GetUntagOpenIdConnectProviderVersionEnum) {
    GetUntagOpenIdConnectProviderVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUntagOpenIdConnectProviderVersionEnum || (GetUntagOpenIdConnectProviderVersionEnum = {}));
var GetUntagOpenIdConnectProviderQueryParams = /** @class */ (function (_super) {
    __extends(GetUntagOpenIdConnectProviderQueryParams, _super);
    function GetUntagOpenIdConnectProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUntagOpenIdConnectProviderQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" }),
        __metadata("design:type", String)
    ], GetUntagOpenIdConnectProviderQueryParams.prototype, "openIdConnectProviderArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" }),
        __metadata("design:type", Array)
    ], GetUntagOpenIdConnectProviderQueryParams.prototype, "tagKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUntagOpenIdConnectProviderQueryParams.prototype, "version", void 0);
    return GetUntagOpenIdConnectProviderQueryParams;
}(SpeakeasyBase));
export { GetUntagOpenIdConnectProviderQueryParams };
var GetUntagOpenIdConnectProviderHeaders = /** @class */ (function (_super) {
    __extends(GetUntagOpenIdConnectProviderHeaders, _super);
    function GetUntagOpenIdConnectProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUntagOpenIdConnectProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUntagOpenIdConnectProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUntagOpenIdConnectProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUntagOpenIdConnectProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUntagOpenIdConnectProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUntagOpenIdConnectProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUntagOpenIdConnectProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUntagOpenIdConnectProviderHeaders;
}(SpeakeasyBase));
export { GetUntagOpenIdConnectProviderHeaders };
var GetUntagOpenIdConnectProviderRequest = /** @class */ (function (_super) {
    __extends(GetUntagOpenIdConnectProviderRequest, _super);
    function GetUntagOpenIdConnectProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUntagOpenIdConnectProviderQueryParams)
    ], GetUntagOpenIdConnectProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUntagOpenIdConnectProviderHeaders)
    ], GetUntagOpenIdConnectProviderRequest.prototype, "headers", void 0);
    return GetUntagOpenIdConnectProviderRequest;
}(SpeakeasyBase));
export { GetUntagOpenIdConnectProviderRequest };
var GetUntagOpenIdConnectProviderResponse = /** @class */ (function (_super) {
    __extends(GetUntagOpenIdConnectProviderResponse, _super);
    function GetUntagOpenIdConnectProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUntagOpenIdConnectProviderResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUntagOpenIdConnectProviderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUntagOpenIdConnectProviderResponse.prototype, "statusCode", void 0);
    return GetUntagOpenIdConnectProviderResponse;
}(SpeakeasyBase));
export { GetUntagOpenIdConnectProviderResponse };
