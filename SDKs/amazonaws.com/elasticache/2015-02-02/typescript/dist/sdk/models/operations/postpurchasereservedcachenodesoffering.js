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
export var PostPurchaseReservedCacheNodesOfferingActionEnum;
(function (PostPurchaseReservedCacheNodesOfferingActionEnum) {
    PostPurchaseReservedCacheNodesOfferingActionEnum["PurchaseReservedCacheNodesOffering"] = "PurchaseReservedCacheNodesOffering";
})(PostPurchaseReservedCacheNodesOfferingActionEnum || (PostPurchaseReservedCacheNodesOfferingActionEnum = {}));
export var PostPurchaseReservedCacheNodesOfferingVersionEnum;
(function (PostPurchaseReservedCacheNodesOfferingVersionEnum) {
    PostPurchaseReservedCacheNodesOfferingVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostPurchaseReservedCacheNodesOfferingVersionEnum || (PostPurchaseReservedCacheNodesOfferingVersionEnum = {}));
var PostPurchaseReservedCacheNodesOfferingQueryParams = /** @class */ (function (_super) {
    __extends(PostPurchaseReservedCacheNodesOfferingQueryParams, _super);
    function PostPurchaseReservedCacheNodesOfferingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostPurchaseReservedCacheNodesOfferingQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostPurchaseReservedCacheNodesOfferingQueryParams.prototype, "version", void 0);
    return PostPurchaseReservedCacheNodesOfferingQueryParams;
}(SpeakeasyBase));
export { PostPurchaseReservedCacheNodesOfferingQueryParams };
var PostPurchaseReservedCacheNodesOfferingHeaders = /** @class */ (function (_super) {
    __extends(PostPurchaseReservedCacheNodesOfferingHeaders, _super);
    function PostPurchaseReservedCacheNodesOfferingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostPurchaseReservedCacheNodesOfferingHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostPurchaseReservedCacheNodesOfferingHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostPurchaseReservedCacheNodesOfferingHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostPurchaseReservedCacheNodesOfferingHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostPurchaseReservedCacheNodesOfferingHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostPurchaseReservedCacheNodesOfferingHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostPurchaseReservedCacheNodesOfferingHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostPurchaseReservedCacheNodesOfferingHeaders;
}(SpeakeasyBase));
export { PostPurchaseReservedCacheNodesOfferingHeaders };
var PostPurchaseReservedCacheNodesOfferingRequest = /** @class */ (function (_super) {
    __extends(PostPurchaseReservedCacheNodesOfferingRequest, _super);
    function PostPurchaseReservedCacheNodesOfferingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostPurchaseReservedCacheNodesOfferingQueryParams)
    ], PostPurchaseReservedCacheNodesOfferingRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostPurchaseReservedCacheNodesOfferingHeaders)
    ], PostPurchaseReservedCacheNodesOfferingRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostPurchaseReservedCacheNodesOfferingRequest.prototype, "request", void 0);
    return PostPurchaseReservedCacheNodesOfferingRequest;
}(SpeakeasyBase));
export { PostPurchaseReservedCacheNodesOfferingRequest };
var PostPurchaseReservedCacheNodesOfferingResponse = /** @class */ (function (_super) {
    __extends(PostPurchaseReservedCacheNodesOfferingResponse, _super);
    function PostPurchaseReservedCacheNodesOfferingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostPurchaseReservedCacheNodesOfferingResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostPurchaseReservedCacheNodesOfferingResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostPurchaseReservedCacheNodesOfferingResponse.prototype, "statusCode", void 0);
    return PostPurchaseReservedCacheNodesOfferingResponse;
}(SpeakeasyBase));
export { PostPurchaseReservedCacheNodesOfferingResponse };
