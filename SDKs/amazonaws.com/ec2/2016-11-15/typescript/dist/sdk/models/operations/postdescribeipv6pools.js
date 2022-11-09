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
export var PostDescribeIpv6PoolsActionEnum;
(function (PostDescribeIpv6PoolsActionEnum) {
    PostDescribeIpv6PoolsActionEnum["DescribeIpv6Pools"] = "DescribeIpv6Pools";
})(PostDescribeIpv6PoolsActionEnum || (PostDescribeIpv6PoolsActionEnum = {}));
export var PostDescribeIpv6PoolsVersionEnum;
(function (PostDescribeIpv6PoolsVersionEnum) {
    PostDescribeIpv6PoolsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeIpv6PoolsVersionEnum || (PostDescribeIpv6PoolsVersionEnum = {}));
var PostDescribeIpv6PoolsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeIpv6PoolsQueryParams, _super);
    function PostDescribeIpv6PoolsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsQueryParams.prototype, "version", void 0);
    return PostDescribeIpv6PoolsQueryParams;
}(SpeakeasyBase));
export { PostDescribeIpv6PoolsQueryParams };
var PostDescribeIpv6PoolsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeIpv6PoolsHeaders, _super);
    function PostDescribeIpv6PoolsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeIpv6PoolsHeaders;
}(SpeakeasyBase));
export { PostDescribeIpv6PoolsHeaders };
var PostDescribeIpv6PoolsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeIpv6PoolsRequest, _super);
    function PostDescribeIpv6PoolsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeIpv6PoolsQueryParams)
    ], PostDescribeIpv6PoolsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeIpv6PoolsHeaders)
    ], PostDescribeIpv6PoolsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeIpv6PoolsRequest.prototype, "request", void 0);
    return PostDescribeIpv6PoolsRequest;
}(SpeakeasyBase));
export { PostDescribeIpv6PoolsRequest };
var PostDescribeIpv6PoolsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeIpv6PoolsResponse, _super);
    function PostDescribeIpv6PoolsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeIpv6PoolsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeIpv6PoolsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeIpv6PoolsResponse.prototype, "statusCode", void 0);
    return PostDescribeIpv6PoolsResponse;
}(SpeakeasyBase));
export { PostDescribeIpv6PoolsResponse };
