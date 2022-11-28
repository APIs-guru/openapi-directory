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
export var PostDeleteLoadBalancerActionEnum;
(function (PostDeleteLoadBalancerActionEnum) {
    PostDeleteLoadBalancerActionEnum["DeleteLoadBalancer"] = "DeleteLoadBalancer";
})(PostDeleteLoadBalancerActionEnum || (PostDeleteLoadBalancerActionEnum = {}));
export var PostDeleteLoadBalancerVersionEnum;
(function (PostDeleteLoadBalancerVersionEnum) {
    PostDeleteLoadBalancerVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostDeleteLoadBalancerVersionEnum || (PostDeleteLoadBalancerVersionEnum = {}));
var PostDeleteLoadBalancerQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteLoadBalancerQueryParams, _super);
    function PostDeleteLoadBalancerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteLoadBalancerQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteLoadBalancerQueryParams.prototype, "version", void 0);
    return PostDeleteLoadBalancerQueryParams;
}(SpeakeasyBase));
export { PostDeleteLoadBalancerQueryParams };
var PostDeleteLoadBalancerHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteLoadBalancerHeaders, _super);
    function PostDeleteLoadBalancerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteLoadBalancerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteLoadBalancerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteLoadBalancerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteLoadBalancerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteLoadBalancerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteLoadBalancerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteLoadBalancerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteLoadBalancerHeaders;
}(SpeakeasyBase));
export { PostDeleteLoadBalancerHeaders };
var PostDeleteLoadBalancerRequest = /** @class */ (function (_super) {
    __extends(PostDeleteLoadBalancerRequest, _super);
    function PostDeleteLoadBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteLoadBalancerQueryParams)
    ], PostDeleteLoadBalancerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteLoadBalancerHeaders)
    ], PostDeleteLoadBalancerRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteLoadBalancerRequest.prototype, "request", void 0);
    return PostDeleteLoadBalancerRequest;
}(SpeakeasyBase));
export { PostDeleteLoadBalancerRequest };
var PostDeleteLoadBalancerResponse = /** @class */ (function (_super) {
    __extends(PostDeleteLoadBalancerResponse, _super);
    function PostDeleteLoadBalancerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteLoadBalancerResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteLoadBalancerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteLoadBalancerResponse.prototype, "statusCode", void 0);
    return PostDeleteLoadBalancerResponse;
}(SpeakeasyBase));
export { PostDeleteLoadBalancerResponse };
