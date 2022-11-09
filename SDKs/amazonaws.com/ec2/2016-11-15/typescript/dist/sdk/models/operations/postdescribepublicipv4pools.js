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
export var PostDescribePublicIpv4PoolsActionEnum;
(function (PostDescribePublicIpv4PoolsActionEnum) {
    PostDescribePublicIpv4PoolsActionEnum["DescribePublicIpv4Pools"] = "DescribePublicIpv4Pools";
})(PostDescribePublicIpv4PoolsActionEnum || (PostDescribePublicIpv4PoolsActionEnum = {}));
export var PostDescribePublicIpv4PoolsVersionEnum;
(function (PostDescribePublicIpv4PoolsVersionEnum) {
    PostDescribePublicIpv4PoolsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribePublicIpv4PoolsVersionEnum || (PostDescribePublicIpv4PoolsVersionEnum = {}));
var PostDescribePublicIpv4PoolsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribePublicIpv4PoolsQueryParams, _super);
    function PostDescribePublicIpv4PoolsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsQueryParams.prototype, "version", void 0);
    return PostDescribePublicIpv4PoolsQueryParams;
}(SpeakeasyBase));
export { PostDescribePublicIpv4PoolsQueryParams };
var PostDescribePublicIpv4PoolsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribePublicIpv4PoolsHeaders, _super);
    function PostDescribePublicIpv4PoolsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribePublicIpv4PoolsHeaders;
}(SpeakeasyBase));
export { PostDescribePublicIpv4PoolsHeaders };
var PostDescribePublicIpv4PoolsRequest = /** @class */ (function (_super) {
    __extends(PostDescribePublicIpv4PoolsRequest, _super);
    function PostDescribePublicIpv4PoolsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribePublicIpv4PoolsQueryParams)
    ], PostDescribePublicIpv4PoolsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribePublicIpv4PoolsHeaders)
    ], PostDescribePublicIpv4PoolsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribePublicIpv4PoolsRequest.prototype, "request", void 0);
    return PostDescribePublicIpv4PoolsRequest;
}(SpeakeasyBase));
export { PostDescribePublicIpv4PoolsRequest };
var PostDescribePublicIpv4PoolsResponse = /** @class */ (function (_super) {
    __extends(PostDescribePublicIpv4PoolsResponse, _super);
    function PostDescribePublicIpv4PoolsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribePublicIpv4PoolsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribePublicIpv4PoolsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribePublicIpv4PoolsResponse.prototype, "statusCode", void 0);
    return PostDescribePublicIpv4PoolsResponse;
}(SpeakeasyBase));
export { PostDescribePublicIpv4PoolsResponse };
