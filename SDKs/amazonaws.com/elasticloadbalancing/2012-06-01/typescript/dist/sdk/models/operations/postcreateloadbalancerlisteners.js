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
export var PostCreateLoadBalancerListenersActionEnum;
(function (PostCreateLoadBalancerListenersActionEnum) {
    PostCreateLoadBalancerListenersActionEnum["CreateLoadBalancerListeners"] = "CreateLoadBalancerListeners";
})(PostCreateLoadBalancerListenersActionEnum || (PostCreateLoadBalancerListenersActionEnum = {}));
export var PostCreateLoadBalancerListenersVersionEnum;
(function (PostCreateLoadBalancerListenersVersionEnum) {
    PostCreateLoadBalancerListenersVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(PostCreateLoadBalancerListenersVersionEnum || (PostCreateLoadBalancerListenersVersionEnum = {}));
var PostCreateLoadBalancerListenersQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateLoadBalancerListenersQueryParams, _super);
    function PostCreateLoadBalancerListenersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateLoadBalancerListenersQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateLoadBalancerListenersQueryParams.prototype, "version", void 0);
    return PostCreateLoadBalancerListenersQueryParams;
}(SpeakeasyBase));
export { PostCreateLoadBalancerListenersQueryParams };
var PostCreateLoadBalancerListenersHeaders = /** @class */ (function (_super) {
    __extends(PostCreateLoadBalancerListenersHeaders, _super);
    function PostCreateLoadBalancerListenersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateLoadBalancerListenersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateLoadBalancerListenersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateLoadBalancerListenersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateLoadBalancerListenersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateLoadBalancerListenersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateLoadBalancerListenersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateLoadBalancerListenersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateLoadBalancerListenersHeaders;
}(SpeakeasyBase));
export { PostCreateLoadBalancerListenersHeaders };
var PostCreateLoadBalancerListenersRequest = /** @class */ (function (_super) {
    __extends(PostCreateLoadBalancerListenersRequest, _super);
    function PostCreateLoadBalancerListenersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateLoadBalancerListenersQueryParams)
    ], PostCreateLoadBalancerListenersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateLoadBalancerListenersHeaders)
    ], PostCreateLoadBalancerListenersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateLoadBalancerListenersRequest.prototype, "request", void 0);
    return PostCreateLoadBalancerListenersRequest;
}(SpeakeasyBase));
export { PostCreateLoadBalancerListenersRequest };
var PostCreateLoadBalancerListenersResponse = /** @class */ (function (_super) {
    __extends(PostCreateLoadBalancerListenersResponse, _super);
    function PostCreateLoadBalancerListenersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateLoadBalancerListenersResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateLoadBalancerListenersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateLoadBalancerListenersResponse.prototype, "statusCode", void 0);
    return PostCreateLoadBalancerListenersResponse;
}(SpeakeasyBase));
export { PostCreateLoadBalancerListenersResponse };
