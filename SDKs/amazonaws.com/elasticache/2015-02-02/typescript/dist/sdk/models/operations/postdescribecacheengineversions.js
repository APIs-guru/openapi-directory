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
export var PostDescribeCacheEngineVersionsActionEnum;
(function (PostDescribeCacheEngineVersionsActionEnum) {
    PostDescribeCacheEngineVersionsActionEnum["DescribeCacheEngineVersions"] = "DescribeCacheEngineVersions";
})(PostDescribeCacheEngineVersionsActionEnum || (PostDescribeCacheEngineVersionsActionEnum = {}));
export var PostDescribeCacheEngineVersionsVersionEnum;
(function (PostDescribeCacheEngineVersionsVersionEnum) {
    PostDescribeCacheEngineVersionsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDescribeCacheEngineVersionsVersionEnum || (PostDescribeCacheEngineVersionsVersionEnum = {}));
var PostDescribeCacheEngineVersionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeCacheEngineVersionsQueryParams, _super);
    function PostDescribeCacheEngineVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsQueryParams.prototype, "version", void 0);
    return PostDescribeCacheEngineVersionsQueryParams;
}(SpeakeasyBase));
export { PostDescribeCacheEngineVersionsQueryParams };
var PostDescribeCacheEngineVersionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeCacheEngineVersionsHeaders, _super);
    function PostDescribeCacheEngineVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeCacheEngineVersionsHeaders;
}(SpeakeasyBase));
export { PostDescribeCacheEngineVersionsHeaders };
var PostDescribeCacheEngineVersionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeCacheEngineVersionsRequest, _super);
    function PostDescribeCacheEngineVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeCacheEngineVersionsQueryParams)
    ], PostDescribeCacheEngineVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeCacheEngineVersionsHeaders)
    ], PostDescribeCacheEngineVersionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeCacheEngineVersionsRequest.prototype, "request", void 0);
    return PostDescribeCacheEngineVersionsRequest;
}(SpeakeasyBase));
export { PostDescribeCacheEngineVersionsRequest };
var PostDescribeCacheEngineVersionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeCacheEngineVersionsResponse, _super);
    function PostDescribeCacheEngineVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeCacheEngineVersionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeCacheEngineVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeCacheEngineVersionsResponse.prototype, "statusCode", void 0);
    return PostDescribeCacheEngineVersionsResponse;
}(SpeakeasyBase));
export { PostDescribeCacheEngineVersionsResponse };
