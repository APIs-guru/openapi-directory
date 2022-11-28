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
export var PostListMfaDeviceTagsActionEnum;
(function (PostListMfaDeviceTagsActionEnum) {
    PostListMfaDeviceTagsActionEnum["ListMfaDeviceTags"] = "ListMFADeviceTags";
})(PostListMfaDeviceTagsActionEnum || (PostListMfaDeviceTagsActionEnum = {}));
export var PostListMfaDeviceTagsVersionEnum;
(function (PostListMfaDeviceTagsVersionEnum) {
    PostListMfaDeviceTagsVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListMfaDeviceTagsVersionEnum || (PostListMfaDeviceTagsVersionEnum = {}));
var PostListMfaDeviceTagsQueryParams = /** @class */ (function (_super) {
    __extends(PostListMfaDeviceTagsQueryParams, _super);
    function PostListMfaDeviceTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListMfaDeviceTagsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListMfaDeviceTagsQueryParams.prototype, "version", void 0);
    return PostListMfaDeviceTagsQueryParams;
}(SpeakeasyBase));
export { PostListMfaDeviceTagsQueryParams };
var PostListMfaDeviceTagsHeaders = /** @class */ (function (_super) {
    __extends(PostListMfaDeviceTagsHeaders, _super);
    function PostListMfaDeviceTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListMfaDeviceTagsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListMfaDeviceTagsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListMfaDeviceTagsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListMfaDeviceTagsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListMfaDeviceTagsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListMfaDeviceTagsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListMfaDeviceTagsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListMfaDeviceTagsHeaders;
}(SpeakeasyBase));
export { PostListMfaDeviceTagsHeaders };
var PostListMfaDeviceTagsRequest = /** @class */ (function (_super) {
    __extends(PostListMfaDeviceTagsRequest, _super);
    function PostListMfaDeviceTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListMfaDeviceTagsQueryParams)
    ], PostListMfaDeviceTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListMfaDeviceTagsHeaders)
    ], PostListMfaDeviceTagsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListMfaDeviceTagsRequest.prototype, "request", void 0);
    return PostListMfaDeviceTagsRequest;
}(SpeakeasyBase));
export { PostListMfaDeviceTagsRequest };
var PostListMfaDeviceTagsResponse = /** @class */ (function (_super) {
    __extends(PostListMfaDeviceTagsResponse, _super);
    function PostListMfaDeviceTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostListMfaDeviceTagsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListMfaDeviceTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListMfaDeviceTagsResponse.prototype, "statusCode", void 0);
    return PostListMfaDeviceTagsResponse;
}(SpeakeasyBase));
export { PostListMfaDeviceTagsResponse };
