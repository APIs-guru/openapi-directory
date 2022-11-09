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
export var PostDescribeVpcClassicLinkDnsSupportActionEnum;
(function (PostDescribeVpcClassicLinkDnsSupportActionEnum) {
    PostDescribeVpcClassicLinkDnsSupportActionEnum["DescribeVpcClassicLinkDnsSupport"] = "DescribeVpcClassicLinkDnsSupport";
})(PostDescribeVpcClassicLinkDnsSupportActionEnum || (PostDescribeVpcClassicLinkDnsSupportActionEnum = {}));
export var PostDescribeVpcClassicLinkDnsSupportVersionEnum;
(function (PostDescribeVpcClassicLinkDnsSupportVersionEnum) {
    PostDescribeVpcClassicLinkDnsSupportVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeVpcClassicLinkDnsSupportVersionEnum || (PostDescribeVpcClassicLinkDnsSupportVersionEnum = {}));
var PostDescribeVpcClassicLinkDnsSupportQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeVpcClassicLinkDnsSupportQueryParams, _super);
    function PostDescribeVpcClassicLinkDnsSupportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportQueryParams.prototype, "version", void 0);
    return PostDescribeVpcClassicLinkDnsSupportQueryParams;
}(SpeakeasyBase));
export { PostDescribeVpcClassicLinkDnsSupportQueryParams };
var PostDescribeVpcClassicLinkDnsSupportHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeVpcClassicLinkDnsSupportHeaders, _super);
    function PostDescribeVpcClassicLinkDnsSupportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeVpcClassicLinkDnsSupportHeaders;
}(SpeakeasyBase));
export { PostDescribeVpcClassicLinkDnsSupportHeaders };
var PostDescribeVpcClassicLinkDnsSupportRequest = /** @class */ (function (_super) {
    __extends(PostDescribeVpcClassicLinkDnsSupportRequest, _super);
    function PostDescribeVpcClassicLinkDnsSupportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeVpcClassicLinkDnsSupportQueryParams)
    ], PostDescribeVpcClassicLinkDnsSupportRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeVpcClassicLinkDnsSupportHeaders)
    ], PostDescribeVpcClassicLinkDnsSupportRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVpcClassicLinkDnsSupportRequest.prototype, "request", void 0);
    return PostDescribeVpcClassicLinkDnsSupportRequest;
}(SpeakeasyBase));
export { PostDescribeVpcClassicLinkDnsSupportRequest };
var PostDescribeVpcClassicLinkDnsSupportResponse = /** @class */ (function (_super) {
    __extends(PostDescribeVpcClassicLinkDnsSupportResponse, _super);
    function PostDescribeVpcClassicLinkDnsSupportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVpcClassicLinkDnsSupportResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkDnsSupportResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeVpcClassicLinkDnsSupportResponse.prototype, "statusCode", void 0);
    return PostDescribeVpcClassicLinkDnsSupportResponse;
}(SpeakeasyBase));
export { PostDescribeVpcClassicLinkDnsSupportResponse };
