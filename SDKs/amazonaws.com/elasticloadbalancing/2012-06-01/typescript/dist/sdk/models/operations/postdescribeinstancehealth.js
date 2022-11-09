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
export var PostDescribeInstanceHealthActionEnum;
(function (PostDescribeInstanceHealthActionEnum) {
    PostDescribeInstanceHealthActionEnum["DescribeInstanceHealth"] = "DescribeInstanceHealth";
})(PostDescribeInstanceHealthActionEnum || (PostDescribeInstanceHealthActionEnum = {}));
export var PostDescribeInstanceHealthVersionEnum;
(function (PostDescribeInstanceHealthVersionEnum) {
    PostDescribeInstanceHealthVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(PostDescribeInstanceHealthVersionEnum || (PostDescribeInstanceHealthVersionEnum = {}));
var PostDescribeInstanceHealthQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceHealthQueryParams, _super);
    function PostDescribeInstanceHealthQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceHealthQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceHealthQueryParams.prototype, "version", void 0);
    return PostDescribeInstanceHealthQueryParams;
}(SpeakeasyBase));
export { PostDescribeInstanceHealthQueryParams };
var PostDescribeInstanceHealthHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceHealthHeaders, _super);
    function PostDescribeInstanceHealthHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceHealthHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceHealthHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceHealthHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceHealthHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceHealthHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceHealthHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeInstanceHealthHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeInstanceHealthHeaders;
}(SpeakeasyBase));
export { PostDescribeInstanceHealthHeaders };
var PostDescribeInstanceHealthRequest = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceHealthRequest, _super);
    function PostDescribeInstanceHealthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeInstanceHealthQueryParams)
    ], PostDescribeInstanceHealthRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeInstanceHealthHeaders)
    ], PostDescribeInstanceHealthRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeInstanceHealthRequest.prototype, "request", void 0);
    return PostDescribeInstanceHealthRequest;
}(SpeakeasyBase));
export { PostDescribeInstanceHealthRequest };
var PostDescribeInstanceHealthResponse = /** @class */ (function (_super) {
    __extends(PostDescribeInstanceHealthResponse, _super);
    function PostDescribeInstanceHealthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeInstanceHealthResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeInstanceHealthResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeInstanceHealthResponse.prototype, "statusCode", void 0);
    return PostDescribeInstanceHealthResponse;
}(SpeakeasyBase));
export { PostDescribeInstanceHealthResponse };
