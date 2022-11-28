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
export var PostDetachLoadBalancerFromSubnetsActionEnum;
(function (PostDetachLoadBalancerFromSubnetsActionEnum) {
    PostDetachLoadBalancerFromSubnetsActionEnum["DetachLoadBalancerFromSubnets"] = "DetachLoadBalancerFromSubnets";
})(PostDetachLoadBalancerFromSubnetsActionEnum || (PostDetachLoadBalancerFromSubnetsActionEnum = {}));
export var PostDetachLoadBalancerFromSubnetsVersionEnum;
(function (PostDetachLoadBalancerFromSubnetsVersionEnum) {
    PostDetachLoadBalancerFromSubnetsVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(PostDetachLoadBalancerFromSubnetsVersionEnum || (PostDetachLoadBalancerFromSubnetsVersionEnum = {}));
var PostDetachLoadBalancerFromSubnetsQueryParams = /** @class */ (function (_super) {
    __extends(PostDetachLoadBalancerFromSubnetsQueryParams, _super);
    function PostDetachLoadBalancerFromSubnetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDetachLoadBalancerFromSubnetsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDetachLoadBalancerFromSubnetsQueryParams.prototype, "version", void 0);
    return PostDetachLoadBalancerFromSubnetsQueryParams;
}(SpeakeasyBase));
export { PostDetachLoadBalancerFromSubnetsQueryParams };
var PostDetachLoadBalancerFromSubnetsHeaders = /** @class */ (function (_super) {
    __extends(PostDetachLoadBalancerFromSubnetsHeaders, _super);
    function PostDetachLoadBalancerFromSubnetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDetachLoadBalancerFromSubnetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDetachLoadBalancerFromSubnetsHeaders;
}(SpeakeasyBase));
export { PostDetachLoadBalancerFromSubnetsHeaders };
var PostDetachLoadBalancerFromSubnetsRequest = /** @class */ (function (_super) {
    __extends(PostDetachLoadBalancerFromSubnetsRequest, _super);
    function PostDetachLoadBalancerFromSubnetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDetachLoadBalancerFromSubnetsQueryParams)
    ], PostDetachLoadBalancerFromSubnetsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDetachLoadBalancerFromSubnetsHeaders)
    ], PostDetachLoadBalancerFromSubnetsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDetachLoadBalancerFromSubnetsRequest.prototype, "request", void 0);
    return PostDetachLoadBalancerFromSubnetsRequest;
}(SpeakeasyBase));
export { PostDetachLoadBalancerFromSubnetsRequest };
var PostDetachLoadBalancerFromSubnetsResponse = /** @class */ (function (_super) {
    __extends(PostDetachLoadBalancerFromSubnetsResponse, _super);
    function PostDetachLoadBalancerFromSubnetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDetachLoadBalancerFromSubnetsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDetachLoadBalancerFromSubnetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDetachLoadBalancerFromSubnetsResponse.prototype, "statusCode", void 0);
    return PostDetachLoadBalancerFromSubnetsResponse;
}(SpeakeasyBase));
export { PostDetachLoadBalancerFromSubnetsResponse };
