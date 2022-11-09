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
export var PostUpdateAccessKeyActionEnum;
(function (PostUpdateAccessKeyActionEnum) {
    PostUpdateAccessKeyActionEnum["UpdateAccessKey"] = "UpdateAccessKey";
})(PostUpdateAccessKeyActionEnum || (PostUpdateAccessKeyActionEnum = {}));
export var PostUpdateAccessKeyVersionEnum;
(function (PostUpdateAccessKeyVersionEnum) {
    PostUpdateAccessKeyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUpdateAccessKeyVersionEnum || (PostUpdateAccessKeyVersionEnum = {}));
var PostUpdateAccessKeyQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateAccessKeyQueryParams, _super);
    function PostUpdateAccessKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateAccessKeyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateAccessKeyQueryParams.prototype, "version", void 0);
    return PostUpdateAccessKeyQueryParams;
}(SpeakeasyBase));
export { PostUpdateAccessKeyQueryParams };
var PostUpdateAccessKeyHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateAccessKeyHeaders, _super);
    function PostUpdateAccessKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateAccessKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateAccessKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateAccessKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateAccessKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateAccessKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateAccessKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateAccessKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateAccessKeyHeaders;
}(SpeakeasyBase));
export { PostUpdateAccessKeyHeaders };
var PostUpdateAccessKeyRequest = /** @class */ (function (_super) {
    __extends(PostUpdateAccessKeyRequest, _super);
    function PostUpdateAccessKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateAccessKeyQueryParams)
    ], PostUpdateAccessKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUpdateAccessKeyHeaders)
    ], PostUpdateAccessKeyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateAccessKeyRequest.prototype, "request", void 0);
    return PostUpdateAccessKeyRequest;
}(SpeakeasyBase));
export { PostUpdateAccessKeyRequest };
var PostUpdateAccessKeyResponse = /** @class */ (function (_super) {
    __extends(PostUpdateAccessKeyResponse, _super);
    function PostUpdateAccessKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateAccessKeyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUpdateAccessKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUpdateAccessKeyResponse.prototype, "statusCode", void 0);
    return PostUpdateAccessKeyResponse;
}(SpeakeasyBase));
export { PostUpdateAccessKeyResponse };
