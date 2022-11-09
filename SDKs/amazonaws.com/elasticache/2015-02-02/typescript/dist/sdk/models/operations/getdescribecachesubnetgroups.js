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
export var GetDescribeCacheSubnetGroupsActionEnum;
(function (GetDescribeCacheSubnetGroupsActionEnum) {
    GetDescribeCacheSubnetGroupsActionEnum["DescribeCacheSubnetGroups"] = "DescribeCacheSubnetGroups";
})(GetDescribeCacheSubnetGroupsActionEnum || (GetDescribeCacheSubnetGroupsActionEnum = {}));
export var GetDescribeCacheSubnetGroupsVersionEnum;
(function (GetDescribeCacheSubnetGroupsVersionEnum) {
    GetDescribeCacheSubnetGroupsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDescribeCacheSubnetGroupsVersionEnum || (GetDescribeCacheSubnetGroupsVersionEnum = {}));
var GetDescribeCacheSubnetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeCacheSubnetGroupsQueryParams, _super);
    function GetDescribeCacheSubnetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CacheSubnetGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsQueryParams.prototype, "cacheSubnetGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeCacheSubnetGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeCacheSubnetGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeCacheSubnetGroupsQueryParams };
var GetDescribeCacheSubnetGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeCacheSubnetGroupsHeaders, _super);
    function GetDescribeCacheSubnetGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeCacheSubnetGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeCacheSubnetGroupsHeaders };
var GetDescribeCacheSubnetGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeCacheSubnetGroupsRequest, _super);
    function GetDescribeCacheSubnetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeCacheSubnetGroupsQueryParams)
    ], GetDescribeCacheSubnetGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeCacheSubnetGroupsHeaders)
    ], GetDescribeCacheSubnetGroupsRequest.prototype, "headers", void 0);
    return GetDescribeCacheSubnetGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeCacheSubnetGroupsRequest };
var GetDescribeCacheSubnetGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeCacheSubnetGroupsResponse, _super);
    function GetDescribeCacheSubnetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeCacheSubnetGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeCacheSubnetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeCacheSubnetGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeCacheSubnetGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeCacheSubnetGroupsResponse };
