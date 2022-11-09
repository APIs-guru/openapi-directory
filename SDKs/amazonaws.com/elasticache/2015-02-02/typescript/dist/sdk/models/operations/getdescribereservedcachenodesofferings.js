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
export var GetDescribeReservedCacheNodesOfferingsActionEnum;
(function (GetDescribeReservedCacheNodesOfferingsActionEnum) {
    GetDescribeReservedCacheNodesOfferingsActionEnum["DescribeReservedCacheNodesOfferings"] = "DescribeReservedCacheNodesOfferings";
})(GetDescribeReservedCacheNodesOfferingsActionEnum || (GetDescribeReservedCacheNodesOfferingsActionEnum = {}));
export var GetDescribeReservedCacheNodesOfferingsVersionEnum;
(function (GetDescribeReservedCacheNodesOfferingsVersionEnum) {
    GetDescribeReservedCacheNodesOfferingsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDescribeReservedCacheNodesOfferingsVersionEnum || (GetDescribeReservedCacheNodesOfferingsVersionEnum = {}));
var GetDescribeReservedCacheNodesOfferingsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeReservedCacheNodesOfferingsQueryParams, _super);
    function GetDescribeReservedCacheNodesOfferingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CacheNodeType" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsQueryParams.prototype, "cacheNodeType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Duration" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsQueryParams.prototype, "duration", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeReservedCacheNodesOfferingsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=OfferingType" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsQueryParams.prototype, "offeringType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ProductDescription" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsQueryParams.prototype, "productDescription", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ReservedCacheNodesOfferingId" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsQueryParams.prototype, "reservedCacheNodesOfferingId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsQueryParams.prototype, "version", void 0);
    return GetDescribeReservedCacheNodesOfferingsQueryParams;
}(SpeakeasyBase));
export { GetDescribeReservedCacheNodesOfferingsQueryParams };
var GetDescribeReservedCacheNodesOfferingsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeReservedCacheNodesOfferingsHeaders, _super);
    function GetDescribeReservedCacheNodesOfferingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeReservedCacheNodesOfferingsHeaders;
}(SpeakeasyBase));
export { GetDescribeReservedCacheNodesOfferingsHeaders };
var GetDescribeReservedCacheNodesOfferingsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeReservedCacheNodesOfferingsRequest, _super);
    function GetDescribeReservedCacheNodesOfferingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeReservedCacheNodesOfferingsQueryParams)
    ], GetDescribeReservedCacheNodesOfferingsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeReservedCacheNodesOfferingsHeaders)
    ], GetDescribeReservedCacheNodesOfferingsRequest.prototype, "headers", void 0);
    return GetDescribeReservedCacheNodesOfferingsRequest;
}(SpeakeasyBase));
export { GetDescribeReservedCacheNodesOfferingsRequest };
var GetDescribeReservedCacheNodesOfferingsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeReservedCacheNodesOfferingsResponse, _super);
    function GetDescribeReservedCacheNodesOfferingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeReservedCacheNodesOfferingsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesOfferingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeReservedCacheNodesOfferingsResponse.prototype, "statusCode", void 0);
    return GetDescribeReservedCacheNodesOfferingsResponse;
}(SpeakeasyBase));
export { GetDescribeReservedCacheNodesOfferingsResponse };
