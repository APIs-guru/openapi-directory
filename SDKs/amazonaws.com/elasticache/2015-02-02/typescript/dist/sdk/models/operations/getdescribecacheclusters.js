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
export var GetDescribeCacheClustersActionEnum;
(function (GetDescribeCacheClustersActionEnum) {
    GetDescribeCacheClustersActionEnum["DescribeCacheClusters"] = "DescribeCacheClusters";
})(GetDescribeCacheClustersActionEnum || (GetDescribeCacheClustersActionEnum = {}));
export var GetDescribeCacheClustersVersionEnum;
(function (GetDescribeCacheClustersVersionEnum) {
    GetDescribeCacheClustersVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDescribeCacheClustersVersionEnum || (GetDescribeCacheClustersVersionEnum = {}));
var GetDescribeCacheClustersQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeCacheClustersQueryParams, _super);
    function GetDescribeCacheClustersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" }),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersQueryParams.prototype, "cacheClusterId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeCacheClustersQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ShowCacheClustersNotInReplicationGroups" }),
        __metadata("design:type", Boolean)
    ], GetDescribeCacheClustersQueryParams.prototype, "showCacheClustersNotInReplicationGroups", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ShowCacheNodeInfo" }),
        __metadata("design:type", Boolean)
    ], GetDescribeCacheClustersQueryParams.prototype, "showCacheNodeInfo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersQueryParams.prototype, "version", void 0);
    return GetDescribeCacheClustersQueryParams;
}(SpeakeasyBase));
export { GetDescribeCacheClustersQueryParams };
var GetDescribeCacheClustersHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeCacheClustersHeaders, _super);
    function GetDescribeCacheClustersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeCacheClustersHeaders;
}(SpeakeasyBase));
export { GetDescribeCacheClustersHeaders };
var GetDescribeCacheClustersRequest = /** @class */ (function (_super) {
    __extends(GetDescribeCacheClustersRequest, _super);
    function GetDescribeCacheClustersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeCacheClustersQueryParams)
    ], GetDescribeCacheClustersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeCacheClustersHeaders)
    ], GetDescribeCacheClustersRequest.prototype, "headers", void 0);
    return GetDescribeCacheClustersRequest;
}(SpeakeasyBase));
export { GetDescribeCacheClustersRequest };
var GetDescribeCacheClustersResponse = /** @class */ (function (_super) {
    __extends(GetDescribeCacheClustersResponse, _super);
    function GetDescribeCacheClustersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeCacheClustersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeCacheClustersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeCacheClustersResponse.prototype, "statusCode", void 0);
    return GetDescribeCacheClustersResponse;
}(SpeakeasyBase));
export { GetDescribeCacheClustersResponse };
