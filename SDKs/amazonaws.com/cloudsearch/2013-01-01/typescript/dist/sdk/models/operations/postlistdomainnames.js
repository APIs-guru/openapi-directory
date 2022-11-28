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
export var PostListDomainNamesActionEnum;
(function (PostListDomainNamesActionEnum) {
    PostListDomainNamesActionEnum["ListDomainNames"] = "ListDomainNames";
})(PostListDomainNamesActionEnum || (PostListDomainNamesActionEnum = {}));
export var PostListDomainNamesVersionEnum;
(function (PostListDomainNamesVersionEnum) {
    PostListDomainNamesVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(PostListDomainNamesVersionEnum || (PostListDomainNamesVersionEnum = {}));
var PostListDomainNamesQueryParams = /** @class */ (function (_super) {
    __extends(PostListDomainNamesQueryParams, _super);
    function PostListDomainNamesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListDomainNamesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListDomainNamesQueryParams.prototype, "version", void 0);
    return PostListDomainNamesQueryParams;
}(SpeakeasyBase));
export { PostListDomainNamesQueryParams };
var PostListDomainNamesHeaders = /** @class */ (function (_super) {
    __extends(PostListDomainNamesHeaders, _super);
    function PostListDomainNamesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListDomainNamesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListDomainNamesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListDomainNamesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListDomainNamesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListDomainNamesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListDomainNamesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListDomainNamesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListDomainNamesHeaders;
}(SpeakeasyBase));
export { PostListDomainNamesHeaders };
var PostListDomainNamesRequest = /** @class */ (function (_super) {
    __extends(PostListDomainNamesRequest, _super);
    function PostListDomainNamesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListDomainNamesQueryParams)
    ], PostListDomainNamesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostListDomainNamesHeaders)
    ], PostListDomainNamesRequest.prototype, "headers", void 0);
    return PostListDomainNamesRequest;
}(SpeakeasyBase));
export { PostListDomainNamesRequest };
var PostListDomainNamesResponse = /** @class */ (function (_super) {
    __extends(PostListDomainNamesResponse, _super);
    function PostListDomainNamesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostListDomainNamesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostListDomainNamesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostListDomainNamesResponse.prototype, "statusCode", void 0);
    return PostListDomainNamesResponse;
}(SpeakeasyBase));
export { PostListDomainNamesResponse };
