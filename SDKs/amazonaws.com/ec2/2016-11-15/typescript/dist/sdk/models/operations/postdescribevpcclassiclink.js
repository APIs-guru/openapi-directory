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
export var PostDescribeVpcClassicLinkActionEnum;
(function (PostDescribeVpcClassicLinkActionEnum) {
    PostDescribeVpcClassicLinkActionEnum["DescribeVpcClassicLink"] = "DescribeVpcClassicLink";
})(PostDescribeVpcClassicLinkActionEnum || (PostDescribeVpcClassicLinkActionEnum = {}));
export var PostDescribeVpcClassicLinkVersionEnum;
(function (PostDescribeVpcClassicLinkVersionEnum) {
    PostDescribeVpcClassicLinkVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeVpcClassicLinkVersionEnum || (PostDescribeVpcClassicLinkVersionEnum = {}));
var PostDescribeVpcClassicLinkQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeVpcClassicLinkQueryParams, _super);
    function PostDescribeVpcClassicLinkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkQueryParams.prototype, "version", void 0);
    return PostDescribeVpcClassicLinkQueryParams;
}(SpeakeasyBase));
export { PostDescribeVpcClassicLinkQueryParams };
var PostDescribeVpcClassicLinkHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeVpcClassicLinkHeaders, _super);
    function PostDescribeVpcClassicLinkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeVpcClassicLinkHeaders;
}(SpeakeasyBase));
export { PostDescribeVpcClassicLinkHeaders };
var PostDescribeVpcClassicLinkRequest = /** @class */ (function (_super) {
    __extends(PostDescribeVpcClassicLinkRequest, _super);
    function PostDescribeVpcClassicLinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeVpcClassicLinkQueryParams)
    ], PostDescribeVpcClassicLinkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeVpcClassicLinkHeaders)
    ], PostDescribeVpcClassicLinkRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVpcClassicLinkRequest.prototype, "request", void 0);
    return PostDescribeVpcClassicLinkRequest;
}(SpeakeasyBase));
export { PostDescribeVpcClassicLinkRequest };
var PostDescribeVpcClassicLinkResponse = /** @class */ (function (_super) {
    __extends(PostDescribeVpcClassicLinkResponse, _super);
    function PostDescribeVpcClassicLinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVpcClassicLinkResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeVpcClassicLinkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeVpcClassicLinkResponse.prototype, "statusCode", void 0);
    return PostDescribeVpcClassicLinkResponse;
}(SpeakeasyBase));
export { PostDescribeVpcClassicLinkResponse };
