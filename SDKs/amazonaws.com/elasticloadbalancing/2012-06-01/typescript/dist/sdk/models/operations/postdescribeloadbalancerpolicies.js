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
export var PostDescribeLoadBalancerPoliciesActionEnum;
(function (PostDescribeLoadBalancerPoliciesActionEnum) {
    PostDescribeLoadBalancerPoliciesActionEnum["DescribeLoadBalancerPolicies"] = "DescribeLoadBalancerPolicies";
})(PostDescribeLoadBalancerPoliciesActionEnum || (PostDescribeLoadBalancerPoliciesActionEnum = {}));
export var PostDescribeLoadBalancerPoliciesVersionEnum;
(function (PostDescribeLoadBalancerPoliciesVersionEnum) {
    PostDescribeLoadBalancerPoliciesVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(PostDescribeLoadBalancerPoliciesVersionEnum || (PostDescribeLoadBalancerPoliciesVersionEnum = {}));
var PostDescribeLoadBalancerPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeLoadBalancerPoliciesQueryParams, _super);
    function PostDescribeLoadBalancerPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerPoliciesQueryParams.prototype, "version", void 0);
    return PostDescribeLoadBalancerPoliciesQueryParams;
}(SpeakeasyBase));
export { PostDescribeLoadBalancerPoliciesQueryParams };
var PostDescribeLoadBalancerPoliciesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeLoadBalancerPoliciesHeaders, _super);
    function PostDescribeLoadBalancerPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeLoadBalancerPoliciesHeaders;
}(SpeakeasyBase));
export { PostDescribeLoadBalancerPoliciesHeaders };
var PostDescribeLoadBalancerPoliciesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeLoadBalancerPoliciesRequest, _super);
    function PostDescribeLoadBalancerPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeLoadBalancerPoliciesQueryParams)
    ], PostDescribeLoadBalancerPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeLoadBalancerPoliciesHeaders)
    ], PostDescribeLoadBalancerPoliciesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLoadBalancerPoliciesRequest.prototype, "request", void 0);
    return PostDescribeLoadBalancerPoliciesRequest;
}(SpeakeasyBase));
export { PostDescribeLoadBalancerPoliciesRequest };
var PostDescribeLoadBalancerPoliciesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeLoadBalancerPoliciesResponse, _super);
    function PostDescribeLoadBalancerPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLoadBalancerPoliciesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeLoadBalancerPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeLoadBalancerPoliciesResponse.prototype, "statusCode", void 0);
    return PostDescribeLoadBalancerPoliciesResponse;
}(SpeakeasyBase));
export { PostDescribeLoadBalancerPoliciesResponse };
