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
export var PostDescribeCacheSecurityGroupsActionEnum;
(function (PostDescribeCacheSecurityGroupsActionEnum) {
    PostDescribeCacheSecurityGroupsActionEnum["DescribeCacheSecurityGroups"] = "DescribeCacheSecurityGroups";
})(PostDescribeCacheSecurityGroupsActionEnum || (PostDescribeCacheSecurityGroupsActionEnum = {}));
export var PostDescribeCacheSecurityGroupsVersionEnum;
(function (PostDescribeCacheSecurityGroupsVersionEnum) {
    PostDescribeCacheSecurityGroupsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDescribeCacheSecurityGroupsVersionEnum || (PostDescribeCacheSecurityGroupsVersionEnum = {}));
var PostDescribeCacheSecurityGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeCacheSecurityGroupsQueryParams, _super);
    function PostDescribeCacheSecurityGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsQueryParams.prototype, "version", void 0);
    return PostDescribeCacheSecurityGroupsQueryParams;
}(SpeakeasyBase));
export { PostDescribeCacheSecurityGroupsQueryParams };
var PostDescribeCacheSecurityGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeCacheSecurityGroupsHeaders, _super);
    function PostDescribeCacheSecurityGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeCacheSecurityGroupsHeaders;
}(SpeakeasyBase));
export { PostDescribeCacheSecurityGroupsHeaders };
var PostDescribeCacheSecurityGroupsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeCacheSecurityGroupsRequest, _super);
    function PostDescribeCacheSecurityGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeCacheSecurityGroupsQueryParams)
    ], PostDescribeCacheSecurityGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeCacheSecurityGroupsHeaders)
    ], PostDescribeCacheSecurityGroupsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeCacheSecurityGroupsRequest.prototype, "request", void 0);
    return PostDescribeCacheSecurityGroupsRequest;
}(SpeakeasyBase));
export { PostDescribeCacheSecurityGroupsRequest };
var PostDescribeCacheSecurityGroupsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeCacheSecurityGroupsResponse, _super);
    function PostDescribeCacheSecurityGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeCacheSecurityGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeCacheSecurityGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeCacheSecurityGroupsResponse.prototype, "statusCode", void 0);
    return PostDescribeCacheSecurityGroupsResponse;
}(SpeakeasyBase));
export { PostDescribeCacheSecurityGroupsResponse };
