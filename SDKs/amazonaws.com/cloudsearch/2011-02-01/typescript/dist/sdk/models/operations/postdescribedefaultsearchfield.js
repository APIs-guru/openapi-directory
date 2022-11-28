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
export var PostDescribeDefaultSearchFieldActionEnum;
(function (PostDescribeDefaultSearchFieldActionEnum) {
    PostDescribeDefaultSearchFieldActionEnum["DescribeDefaultSearchField"] = "DescribeDefaultSearchField";
})(PostDescribeDefaultSearchFieldActionEnum || (PostDescribeDefaultSearchFieldActionEnum = {}));
export var PostDescribeDefaultSearchFieldVersionEnum;
(function (PostDescribeDefaultSearchFieldVersionEnum) {
    PostDescribeDefaultSearchFieldVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(PostDescribeDefaultSearchFieldVersionEnum || (PostDescribeDefaultSearchFieldVersionEnum = {}));
var PostDescribeDefaultSearchFieldQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeDefaultSearchFieldQueryParams, _super);
    function PostDescribeDefaultSearchFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultSearchFieldQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultSearchFieldQueryParams.prototype, "version", void 0);
    return PostDescribeDefaultSearchFieldQueryParams;
}(SpeakeasyBase));
export { PostDescribeDefaultSearchFieldQueryParams };
var PostDescribeDefaultSearchFieldHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeDefaultSearchFieldHeaders, _super);
    function PostDescribeDefaultSearchFieldHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultSearchFieldHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultSearchFieldHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultSearchFieldHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultSearchFieldHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultSearchFieldHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultSearchFieldHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultSearchFieldHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeDefaultSearchFieldHeaders;
}(SpeakeasyBase));
export { PostDescribeDefaultSearchFieldHeaders };
var PostDescribeDefaultSearchFieldRequest = /** @class */ (function (_super) {
    __extends(PostDescribeDefaultSearchFieldRequest, _super);
    function PostDescribeDefaultSearchFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeDefaultSearchFieldQueryParams)
    ], PostDescribeDefaultSearchFieldRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeDefaultSearchFieldHeaders)
    ], PostDescribeDefaultSearchFieldRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDefaultSearchFieldRequest.prototype, "request", void 0);
    return PostDescribeDefaultSearchFieldRequest;
}(SpeakeasyBase));
export { PostDescribeDefaultSearchFieldRequest };
var PostDescribeDefaultSearchFieldResponse = /** @class */ (function (_super) {
    __extends(PostDescribeDefaultSearchFieldResponse, _super);
    function PostDescribeDefaultSearchFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDefaultSearchFieldResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeDefaultSearchFieldResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeDefaultSearchFieldResponse.prototype, "statusCode", void 0);
    return PostDescribeDefaultSearchFieldResponse;
}(SpeakeasyBase));
export { PostDescribeDefaultSearchFieldResponse };
