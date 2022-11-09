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
export var PostAttachLoadBalancersActionEnum;
(function (PostAttachLoadBalancersActionEnum) {
    PostAttachLoadBalancersActionEnum["AttachLoadBalancers"] = "AttachLoadBalancers";
})(PostAttachLoadBalancersActionEnum || (PostAttachLoadBalancersActionEnum = {}));
export var PostAttachLoadBalancersVersionEnum;
(function (PostAttachLoadBalancersVersionEnum) {
    PostAttachLoadBalancersVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostAttachLoadBalancersVersionEnum || (PostAttachLoadBalancersVersionEnum = {}));
var PostAttachLoadBalancersQueryParams = /** @class */ (function (_super) {
    __extends(PostAttachLoadBalancersQueryParams, _super);
    function PostAttachLoadBalancersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancersQueryParams.prototype, "version", void 0);
    return PostAttachLoadBalancersQueryParams;
}(SpeakeasyBase));
export { PostAttachLoadBalancersQueryParams };
var PostAttachLoadBalancersHeaders = /** @class */ (function (_super) {
    __extends(PostAttachLoadBalancersHeaders, _super);
    function PostAttachLoadBalancersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAttachLoadBalancersHeaders;
}(SpeakeasyBase));
export { PostAttachLoadBalancersHeaders };
var PostAttachLoadBalancersRequest = /** @class */ (function (_super) {
    __extends(PostAttachLoadBalancersRequest, _super);
    function PostAttachLoadBalancersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostAttachLoadBalancersQueryParams)
    ], PostAttachLoadBalancersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostAttachLoadBalancersHeaders)
    ], PostAttachLoadBalancersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAttachLoadBalancersRequest.prototype, "request", void 0);
    return PostAttachLoadBalancersRequest;
}(SpeakeasyBase));
export { PostAttachLoadBalancersRequest };
var PostAttachLoadBalancersResponse = /** @class */ (function (_super) {
    __extends(PostAttachLoadBalancersResponse, _super);
    function PostAttachLoadBalancersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostAttachLoadBalancersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostAttachLoadBalancersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostAttachLoadBalancersResponse.prototype, "statusCode", void 0);
    return PostAttachLoadBalancersResponse;
}(SpeakeasyBase));
export { PostAttachLoadBalancersResponse };
