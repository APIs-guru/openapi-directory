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
export var GetDescribeReservedCacheNodesActionEnum;
(function (GetDescribeReservedCacheNodesActionEnum) {
    GetDescribeReservedCacheNodesActionEnum["DescribeReservedCacheNodes"] = "DescribeReservedCacheNodes";
})(GetDescribeReservedCacheNodesActionEnum || (GetDescribeReservedCacheNodesActionEnum = {}));
export var GetDescribeReservedCacheNodesVersionEnum;
(function (GetDescribeReservedCacheNodesVersionEnum) {
    GetDescribeReservedCacheNodesVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDescribeReservedCacheNodesVersionEnum || (GetDescribeReservedCacheNodesVersionEnum = {}));
var GetDescribeReservedCacheNodesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeReservedCacheNodesQueryParams, _super);
    function GetDescribeReservedCacheNodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheNodeType" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesQueryParams.prototype, "cacheNodeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Duration" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesQueryParams.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeReservedCacheNodesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OfferingType" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesQueryParams.prototype, "offeringType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ProductDescription" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesQueryParams.prototype, "productDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedCacheNodeId" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesQueryParams.prototype, "reservedCacheNodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedCacheNodesOfferingId" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesQueryParams.prototype, "reservedCacheNodesOfferingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesQueryParams.prototype, "version", void 0);
    return GetDescribeReservedCacheNodesQueryParams;
}(SpeakeasyBase));
export { GetDescribeReservedCacheNodesQueryParams };
var GetDescribeReservedCacheNodesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeReservedCacheNodesHeaders, _super);
    function GetDescribeReservedCacheNodesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeReservedCacheNodesHeaders;
}(SpeakeasyBase));
export { GetDescribeReservedCacheNodesHeaders };
var GetDescribeReservedCacheNodesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeReservedCacheNodesRequest, _super);
    function GetDescribeReservedCacheNodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeReservedCacheNodesQueryParams)
    ], GetDescribeReservedCacheNodesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeReservedCacheNodesHeaders)
    ], GetDescribeReservedCacheNodesRequest.prototype, "headers", void 0);
    return GetDescribeReservedCacheNodesRequest;
}(SpeakeasyBase));
export { GetDescribeReservedCacheNodesRequest };
var GetDescribeReservedCacheNodesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeReservedCacheNodesResponse, _super);
    function GetDescribeReservedCacheNodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeReservedCacheNodesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeReservedCacheNodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeReservedCacheNodesResponse.prototype, "statusCode", void 0);
    return GetDescribeReservedCacheNodesResponse;
}(SpeakeasyBase));
export { GetDescribeReservedCacheNodesResponse };
