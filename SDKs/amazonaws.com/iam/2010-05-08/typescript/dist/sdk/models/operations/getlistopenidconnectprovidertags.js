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
export var GetListOpenIdConnectProviderTagsActionEnum;
(function (GetListOpenIdConnectProviderTagsActionEnum) {
    GetListOpenIdConnectProviderTagsActionEnum["ListOpenIdConnectProviderTags"] = "ListOpenIDConnectProviderTags";
})(GetListOpenIdConnectProviderTagsActionEnum || (GetListOpenIdConnectProviderTagsActionEnum = {}));
export var GetListOpenIdConnectProviderTagsVersionEnum;
(function (GetListOpenIdConnectProviderTagsVersionEnum) {
    GetListOpenIdConnectProviderTagsVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListOpenIdConnectProviderTagsVersionEnum || (GetListOpenIdConnectProviderTagsVersionEnum = {}));
var GetListOpenIdConnectProviderTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetListOpenIdConnectProviderTagsQueryParams, _super);
    function GetListOpenIdConnectProviderTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListOpenIdConnectProviderTagsQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OpenIDConnectProviderArn" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsQueryParams.prototype, "openIdConnectProviderArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsQueryParams.prototype, "version", void 0);
    return GetListOpenIdConnectProviderTagsQueryParams;
}(SpeakeasyBase));
export { GetListOpenIdConnectProviderTagsQueryParams };
var GetListOpenIdConnectProviderTagsHeaders = /** @class */ (function (_super) {
    __extends(GetListOpenIdConnectProviderTagsHeaders, _super);
    function GetListOpenIdConnectProviderTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListOpenIdConnectProviderTagsHeaders;
}(SpeakeasyBase));
export { GetListOpenIdConnectProviderTagsHeaders };
var GetListOpenIdConnectProviderTagsRequest = /** @class */ (function (_super) {
    __extends(GetListOpenIdConnectProviderTagsRequest, _super);
    function GetListOpenIdConnectProviderTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListOpenIdConnectProviderTagsQueryParams)
    ], GetListOpenIdConnectProviderTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListOpenIdConnectProviderTagsHeaders)
    ], GetListOpenIdConnectProviderTagsRequest.prototype, "headers", void 0);
    return GetListOpenIdConnectProviderTagsRequest;
}(SpeakeasyBase));
export { GetListOpenIdConnectProviderTagsRequest };
var GetListOpenIdConnectProviderTagsResponse = /** @class */ (function (_super) {
    __extends(GetListOpenIdConnectProviderTagsResponse, _super);
    function GetListOpenIdConnectProviderTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListOpenIdConnectProviderTagsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListOpenIdConnectProviderTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListOpenIdConnectProviderTagsResponse.prototype, "statusCode", void 0);
    return GetListOpenIdConnectProviderTagsResponse;
}(SpeakeasyBase));
export { GetListOpenIdConnectProviderTagsResponse };
