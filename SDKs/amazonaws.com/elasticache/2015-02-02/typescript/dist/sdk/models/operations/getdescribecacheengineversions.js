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
export var GetDescribeCacheEngineVersionsActionEnum;
(function (GetDescribeCacheEngineVersionsActionEnum) {
    GetDescribeCacheEngineVersionsActionEnum["DescribeCacheEngineVersions"] = "DescribeCacheEngineVersions";
})(GetDescribeCacheEngineVersionsActionEnum || (GetDescribeCacheEngineVersionsActionEnum = {}));
export var GetDescribeCacheEngineVersionsVersionEnum;
(function (GetDescribeCacheEngineVersionsVersionEnum) {
    GetDescribeCacheEngineVersionsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDescribeCacheEngineVersionsVersionEnum || (GetDescribeCacheEngineVersionsVersionEnum = {}));
var GetDescribeCacheEngineVersionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeCacheEngineVersionsQueryParams, _super);
    function GetDescribeCacheEngineVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CacheParameterGroupFamily" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsQueryParams.prototype, "cacheParameterGroupFamily", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DefaultOnly" }),
        __metadata("design:type", Boolean)
    ], GetDescribeCacheEngineVersionsQueryParams.prototype, "defaultOnly", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Engine" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsQueryParams.prototype, "engine", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsQueryParams.prototype, "engineVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeCacheEngineVersionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsQueryParams.prototype, "version", void 0);
    return GetDescribeCacheEngineVersionsQueryParams;
}(SpeakeasyBase));
export { GetDescribeCacheEngineVersionsQueryParams };
var GetDescribeCacheEngineVersionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeCacheEngineVersionsHeaders, _super);
    function GetDescribeCacheEngineVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeCacheEngineVersionsHeaders;
}(SpeakeasyBase));
export { GetDescribeCacheEngineVersionsHeaders };
var GetDescribeCacheEngineVersionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeCacheEngineVersionsRequest, _super);
    function GetDescribeCacheEngineVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeCacheEngineVersionsQueryParams)
    ], GetDescribeCacheEngineVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeCacheEngineVersionsHeaders)
    ], GetDescribeCacheEngineVersionsRequest.prototype, "headers", void 0);
    return GetDescribeCacheEngineVersionsRequest;
}(SpeakeasyBase));
export { GetDescribeCacheEngineVersionsRequest };
var GetDescribeCacheEngineVersionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeCacheEngineVersionsResponse, _super);
    function GetDescribeCacheEngineVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeCacheEngineVersionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeCacheEngineVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeCacheEngineVersionsResponse.prototype, "statusCode", void 0);
    return GetDescribeCacheEngineVersionsResponse;
}(SpeakeasyBase));
export { GetDescribeCacheEngineVersionsResponse };
