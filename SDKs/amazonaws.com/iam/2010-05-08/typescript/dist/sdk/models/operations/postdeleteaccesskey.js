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
export var PostDeleteAccessKeyActionEnum;
(function (PostDeleteAccessKeyActionEnum) {
    PostDeleteAccessKeyActionEnum["DeleteAccessKey"] = "DeleteAccessKey";
})(PostDeleteAccessKeyActionEnum || (PostDeleteAccessKeyActionEnum = {}));
export var PostDeleteAccessKeyVersionEnum;
(function (PostDeleteAccessKeyVersionEnum) {
    PostDeleteAccessKeyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteAccessKeyVersionEnum || (PostDeleteAccessKeyVersionEnum = {}));
var PostDeleteAccessKeyQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteAccessKeyQueryParams, _super);
    function PostDeleteAccessKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteAccessKeyQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteAccessKeyQueryParams.prototype, "version", void 0);
    return PostDeleteAccessKeyQueryParams;
}(SpeakeasyBase));
export { PostDeleteAccessKeyQueryParams };
var PostDeleteAccessKeyHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteAccessKeyHeaders, _super);
    function PostDeleteAccessKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteAccessKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteAccessKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteAccessKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteAccessKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteAccessKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteAccessKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteAccessKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteAccessKeyHeaders;
}(SpeakeasyBase));
export { PostDeleteAccessKeyHeaders };
var PostDeleteAccessKeyRequest = /** @class */ (function (_super) {
    __extends(PostDeleteAccessKeyRequest, _super);
    function PostDeleteAccessKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteAccessKeyQueryParams)
    ], PostDeleteAccessKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDeleteAccessKeyHeaders)
    ], PostDeleteAccessKeyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteAccessKeyRequest.prototype, "request", void 0);
    return PostDeleteAccessKeyRequest;
}(SpeakeasyBase));
export { PostDeleteAccessKeyRequest };
var PostDeleteAccessKeyResponse = /** @class */ (function (_super) {
    __extends(PostDeleteAccessKeyResponse, _super);
    function PostDeleteAccessKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteAccessKeyResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDeleteAccessKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDeleteAccessKeyResponse.prototype, "statusCode", void 0);
    return PostDeleteAccessKeyResponse;
}(SpeakeasyBase));
export { PostDeleteAccessKeyResponse };
