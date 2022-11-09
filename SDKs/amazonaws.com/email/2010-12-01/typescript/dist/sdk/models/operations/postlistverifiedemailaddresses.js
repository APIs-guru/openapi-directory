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
export var PostListVerifiedEmailAddressesActionEnum;
(function (PostListVerifiedEmailAddressesActionEnum) {
    PostListVerifiedEmailAddressesActionEnum["ListVerifiedEmailAddresses"] = "ListVerifiedEmailAddresses";
})(PostListVerifiedEmailAddressesActionEnum || (PostListVerifiedEmailAddressesActionEnum = {}));
export var PostListVerifiedEmailAddressesVersionEnum;
(function (PostListVerifiedEmailAddressesVersionEnum) {
    PostListVerifiedEmailAddressesVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostListVerifiedEmailAddressesVersionEnum || (PostListVerifiedEmailAddressesVersionEnum = {}));
var PostListVerifiedEmailAddressesQueryParams = /** @class */ (function (_super) {
    __extends(PostListVerifiedEmailAddressesQueryParams, _super);
    function PostListVerifiedEmailAddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListVerifiedEmailAddressesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListVerifiedEmailAddressesQueryParams.prototype, "version", void 0);
    return PostListVerifiedEmailAddressesQueryParams;
}(SpeakeasyBase));
export { PostListVerifiedEmailAddressesQueryParams };
var PostListVerifiedEmailAddressesHeaders = /** @class */ (function (_super) {
    __extends(PostListVerifiedEmailAddressesHeaders, _super);
    function PostListVerifiedEmailAddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListVerifiedEmailAddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListVerifiedEmailAddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListVerifiedEmailAddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListVerifiedEmailAddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListVerifiedEmailAddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListVerifiedEmailAddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListVerifiedEmailAddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListVerifiedEmailAddressesHeaders;
}(SpeakeasyBase));
export { PostListVerifiedEmailAddressesHeaders };
var PostListVerifiedEmailAddressesRequest = /** @class */ (function (_super) {
    __extends(PostListVerifiedEmailAddressesRequest, _super);
    function PostListVerifiedEmailAddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostListVerifiedEmailAddressesQueryParams)
    ], PostListVerifiedEmailAddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostListVerifiedEmailAddressesHeaders)
    ], PostListVerifiedEmailAddressesRequest.prototype, "headers", void 0);
    return PostListVerifiedEmailAddressesRequest;
}(SpeakeasyBase));
export { PostListVerifiedEmailAddressesRequest };
var PostListVerifiedEmailAddressesResponse = /** @class */ (function (_super) {
    __extends(PostListVerifiedEmailAddressesResponse, _super);
    function PostListVerifiedEmailAddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostListVerifiedEmailAddressesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostListVerifiedEmailAddressesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostListVerifiedEmailAddressesResponse.prototype, "statusCode", void 0);
    return PostListVerifiedEmailAddressesResponse;
}(SpeakeasyBase));
export { PostListVerifiedEmailAddressesResponse };
