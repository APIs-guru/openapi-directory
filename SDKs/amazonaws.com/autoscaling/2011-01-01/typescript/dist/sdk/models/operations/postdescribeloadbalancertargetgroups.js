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
export var PostDescribeLoadBalancerTargetGroupsActionEnum;
(function (PostDescribeLoadBalancerTargetGroupsActionEnum) {
    PostDescribeLoadBalancerTargetGroupsActionEnum["DescribeLoadBalancerTargetGroups"] = "DescribeLoadBalancerTargetGroups";
})(PostDescribeLoadBalancerTargetGroupsActionEnum || (PostDescribeLoadBalancerTargetGroupsActionEnum = {}));
export var PostDescribeLoadBalancerTargetGroupsVersionEnum;
(function (PostDescribeLoadBalancerTargetGroupsVersionEnum) {
    PostDescribeLoadBalancerTargetGroupsVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostDescribeLoadBalancerTargetGroupsVersionEnum || (PostDescribeLoadBalancerTargetGroupsVersionEnum = {}));
var PostDescribeLoadBalancerTargetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeLoadBalancerTargetGroupsQueryParams, _super);
    function PostDescribeLoadBalancerTargetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerTargetGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerTargetGroupsQueryParams.prototype, "version", void 0);
    return PostDescribeLoadBalancerTargetGroupsQueryParams;
}(SpeakeasyBase));
export { PostDescribeLoadBalancerTargetGroupsQueryParams };
var PostDescribeLoadBalancerTargetGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeLoadBalancerTargetGroupsHeaders, _super);
    function PostDescribeLoadBalancerTargetGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerTargetGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeLoadBalancerTargetGroupsHeaders;
}(SpeakeasyBase));
export { PostDescribeLoadBalancerTargetGroupsHeaders };
var PostDescribeLoadBalancerTargetGroupsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeLoadBalancerTargetGroupsRequest, _super);
    function PostDescribeLoadBalancerTargetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeLoadBalancerTargetGroupsQueryParams)
    ], PostDescribeLoadBalancerTargetGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeLoadBalancerTargetGroupsHeaders)
    ], PostDescribeLoadBalancerTargetGroupsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLoadBalancerTargetGroupsRequest.prototype, "request", void 0);
    return PostDescribeLoadBalancerTargetGroupsRequest;
}(SpeakeasyBase));
export { PostDescribeLoadBalancerTargetGroupsRequest };
var PostDescribeLoadBalancerTargetGroupsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeLoadBalancerTargetGroupsResponse, _super);
    function PostDescribeLoadBalancerTargetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLoadBalancerTargetGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerTargetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeLoadBalancerTargetGroupsResponse.prototype, "statusCode", void 0);
    return PostDescribeLoadBalancerTargetGroupsResponse;
}(SpeakeasyBase));
export { PostDescribeLoadBalancerTargetGroupsResponse };
