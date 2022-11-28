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
export var PostDescribePlatformVersionActionEnum;
(function (PostDescribePlatformVersionActionEnum) {
    PostDescribePlatformVersionActionEnum["DescribePlatformVersion"] = "DescribePlatformVersion";
})(PostDescribePlatformVersionActionEnum || (PostDescribePlatformVersionActionEnum = {}));
export var PostDescribePlatformVersionVersionEnum;
(function (PostDescribePlatformVersionVersionEnum) {
    PostDescribePlatformVersionVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDescribePlatformVersionVersionEnum || (PostDescribePlatformVersionVersionEnum = {}));
var PostDescribePlatformVersionQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribePlatformVersionQueryParams, _super);
    function PostDescribePlatformVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribePlatformVersionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribePlatformVersionQueryParams.prototype, "version", void 0);
    return PostDescribePlatformVersionQueryParams;
}(SpeakeasyBase));
export { PostDescribePlatformVersionQueryParams };
var PostDescribePlatformVersionHeaders = /** @class */ (function (_super) {
    __extends(PostDescribePlatformVersionHeaders, _super);
    function PostDescribePlatformVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribePlatformVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribePlatformVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribePlatformVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribePlatformVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribePlatformVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribePlatformVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribePlatformVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribePlatformVersionHeaders;
}(SpeakeasyBase));
export { PostDescribePlatformVersionHeaders };
var PostDescribePlatformVersionRequest = /** @class */ (function (_super) {
    __extends(PostDescribePlatformVersionRequest, _super);
    function PostDescribePlatformVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribePlatformVersionQueryParams)
    ], PostDescribePlatformVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribePlatformVersionHeaders)
    ], PostDescribePlatformVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribePlatformVersionRequest.prototype, "request", void 0);
    return PostDescribePlatformVersionRequest;
}(SpeakeasyBase));
export { PostDescribePlatformVersionRequest };
var PostDescribePlatformVersionResponse = /** @class */ (function (_super) {
    __extends(PostDescribePlatformVersionResponse, _super);
    function PostDescribePlatformVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribePlatformVersionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribePlatformVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribePlatformVersionResponse.prototype, "statusCode", void 0);
    return PostDescribePlatformVersionResponse;
}(SpeakeasyBase));
export { PostDescribePlatformVersionResponse };
