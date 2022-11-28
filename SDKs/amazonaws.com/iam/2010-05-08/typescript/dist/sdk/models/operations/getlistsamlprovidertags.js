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
export var GetListSamlProviderTagsActionEnum;
(function (GetListSamlProviderTagsActionEnum) {
    GetListSamlProviderTagsActionEnum["ListSamlProviderTags"] = "ListSAMLProviderTags";
})(GetListSamlProviderTagsActionEnum || (GetListSamlProviderTagsActionEnum = {}));
export var GetListSamlProviderTagsVersionEnum;
(function (GetListSamlProviderTagsVersionEnum) {
    GetListSamlProviderTagsVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListSamlProviderTagsVersionEnum || (GetListSamlProviderTagsVersionEnum = {}));
var GetListSamlProviderTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetListSamlProviderTagsQueryParams, _super);
    function GetListSamlProviderTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListSamlProviderTagsQueryParams.prototype, "maxItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SAMLProviderArn" }),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsQueryParams.prototype, "samlProviderArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsQueryParams.prototype, "version", void 0);
    return GetListSamlProviderTagsQueryParams;
}(SpeakeasyBase));
export { GetListSamlProviderTagsQueryParams };
var GetListSamlProviderTagsHeaders = /** @class */ (function (_super) {
    __extends(GetListSamlProviderTagsHeaders, _super);
    function GetListSamlProviderTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListSamlProviderTagsHeaders;
}(SpeakeasyBase));
export { GetListSamlProviderTagsHeaders };
var GetListSamlProviderTagsRequest = /** @class */ (function (_super) {
    __extends(GetListSamlProviderTagsRequest, _super);
    function GetListSamlProviderTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListSamlProviderTagsQueryParams)
    ], GetListSamlProviderTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListSamlProviderTagsHeaders)
    ], GetListSamlProviderTagsRequest.prototype, "headers", void 0);
    return GetListSamlProviderTagsRequest;
}(SpeakeasyBase));
export { GetListSamlProviderTagsRequest };
var GetListSamlProviderTagsResponse = /** @class */ (function (_super) {
    __extends(GetListSamlProviderTagsResponse, _super);
    function GetListSamlProviderTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetListSamlProviderTagsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListSamlProviderTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListSamlProviderTagsResponse.prototype, "statusCode", void 0);
    return GetListSamlProviderTagsResponse;
}(SpeakeasyBase));
export { GetListSamlProviderTagsResponse };
