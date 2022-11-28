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
export var PostListInstanceProfileTagsActionEnum;
(function (PostListInstanceProfileTagsActionEnum) {
    PostListInstanceProfileTagsActionEnum["ListInstanceProfileTags"] = "ListInstanceProfileTags";
})(PostListInstanceProfileTagsActionEnum || (PostListInstanceProfileTagsActionEnum = {}));
export var PostListInstanceProfileTagsVersionEnum;
(function (PostListInstanceProfileTagsVersionEnum) {
    PostListInstanceProfileTagsVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListInstanceProfileTagsVersionEnum || (PostListInstanceProfileTagsVersionEnum = {}));
var PostListInstanceProfileTagsQueryParams = /** @class */ (function (_super) {
    __extends(PostListInstanceProfileTagsQueryParams, _super);
    function PostListInstanceProfileTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListInstanceProfileTagsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListInstanceProfileTagsQueryParams.prototype, "version", void 0);
    return PostListInstanceProfileTagsQueryParams;
}(SpeakeasyBase));
export { PostListInstanceProfileTagsQueryParams };
var PostListInstanceProfileTagsHeaders = /** @class */ (function (_super) {
    __extends(PostListInstanceProfileTagsHeaders, _super);
    function PostListInstanceProfileTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListInstanceProfileTagsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListInstanceProfileTagsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListInstanceProfileTagsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListInstanceProfileTagsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListInstanceProfileTagsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListInstanceProfileTagsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListInstanceProfileTagsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListInstanceProfileTagsHeaders;
}(SpeakeasyBase));
export { PostListInstanceProfileTagsHeaders };
var PostListInstanceProfileTagsRequest = /** @class */ (function (_super) {
    __extends(PostListInstanceProfileTagsRequest, _super);
    function PostListInstanceProfileTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListInstanceProfileTagsQueryParams)
    ], PostListInstanceProfileTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListInstanceProfileTagsHeaders)
    ], PostListInstanceProfileTagsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListInstanceProfileTagsRequest.prototype, "request", void 0);
    return PostListInstanceProfileTagsRequest;
}(SpeakeasyBase));
export { PostListInstanceProfileTagsRequest };
var PostListInstanceProfileTagsResponse = /** @class */ (function (_super) {
    __extends(PostListInstanceProfileTagsResponse, _super);
    function PostListInstanceProfileTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostListInstanceProfileTagsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListInstanceProfileTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListInstanceProfileTagsResponse.prototype, "statusCode", void 0);
    return PostListInstanceProfileTagsResponse;
}(SpeakeasyBase));
export { PostListInstanceProfileTagsResponse };
