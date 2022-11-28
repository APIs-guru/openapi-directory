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
export var PostCreateLbCookieStickinessPolicyActionEnum;
(function (PostCreateLbCookieStickinessPolicyActionEnum) {
    PostCreateLbCookieStickinessPolicyActionEnum["CreateLbCookieStickinessPolicy"] = "CreateLBCookieStickinessPolicy";
})(PostCreateLbCookieStickinessPolicyActionEnum || (PostCreateLbCookieStickinessPolicyActionEnum = {}));
export var PostCreateLbCookieStickinessPolicyVersionEnum;
(function (PostCreateLbCookieStickinessPolicyVersionEnum) {
    PostCreateLbCookieStickinessPolicyVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(PostCreateLbCookieStickinessPolicyVersionEnum || (PostCreateLbCookieStickinessPolicyVersionEnum = {}));
var PostCreateLbCookieStickinessPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateLbCookieStickinessPolicyQueryParams, _super);
    function PostCreateLbCookieStickinessPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateLbCookieStickinessPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateLbCookieStickinessPolicyQueryParams.prototype, "version", void 0);
    return PostCreateLbCookieStickinessPolicyQueryParams;
}(SpeakeasyBase));
export { PostCreateLbCookieStickinessPolicyQueryParams };
var PostCreateLbCookieStickinessPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostCreateLbCookieStickinessPolicyHeaders, _super);
    function PostCreateLbCookieStickinessPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateLbCookieStickinessPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateLbCookieStickinessPolicyHeaders;
}(SpeakeasyBase));
export { PostCreateLbCookieStickinessPolicyHeaders };
var PostCreateLbCookieStickinessPolicyRequest = /** @class */ (function (_super) {
    __extends(PostCreateLbCookieStickinessPolicyRequest, _super);
    function PostCreateLbCookieStickinessPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateLbCookieStickinessPolicyQueryParams)
    ], PostCreateLbCookieStickinessPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCreateLbCookieStickinessPolicyHeaders)
    ], PostCreateLbCookieStickinessPolicyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateLbCookieStickinessPolicyRequest.prototype, "request", void 0);
    return PostCreateLbCookieStickinessPolicyRequest;
}(SpeakeasyBase));
export { PostCreateLbCookieStickinessPolicyRequest };
var PostCreateLbCookieStickinessPolicyResponse = /** @class */ (function (_super) {
    __extends(PostCreateLbCookieStickinessPolicyResponse, _super);
    function PostCreateLbCookieStickinessPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateLbCookieStickinessPolicyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCreateLbCookieStickinessPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCreateLbCookieStickinessPolicyResponse.prototype, "statusCode", void 0);
    return PostCreateLbCookieStickinessPolicyResponse;
}(SpeakeasyBase));
export { PostCreateLbCookieStickinessPolicyResponse };
