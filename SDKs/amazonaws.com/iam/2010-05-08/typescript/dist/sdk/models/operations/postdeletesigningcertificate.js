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
export var PostDeleteSigningCertificateActionEnum;
(function (PostDeleteSigningCertificateActionEnum) {
    PostDeleteSigningCertificateActionEnum["DeleteSigningCertificate"] = "DeleteSigningCertificate";
})(PostDeleteSigningCertificateActionEnum || (PostDeleteSigningCertificateActionEnum = {}));
export var PostDeleteSigningCertificateVersionEnum;
(function (PostDeleteSigningCertificateVersionEnum) {
    PostDeleteSigningCertificateVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteSigningCertificateVersionEnum || (PostDeleteSigningCertificateVersionEnum = {}));
var PostDeleteSigningCertificateQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteSigningCertificateQueryParams, _super);
    function PostDeleteSigningCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteSigningCertificateQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteSigningCertificateQueryParams.prototype, "version", void 0);
    return PostDeleteSigningCertificateQueryParams;
}(SpeakeasyBase));
export { PostDeleteSigningCertificateQueryParams };
var PostDeleteSigningCertificateHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteSigningCertificateHeaders, _super);
    function PostDeleteSigningCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteSigningCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteSigningCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteSigningCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteSigningCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteSigningCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteSigningCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteSigningCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteSigningCertificateHeaders;
}(SpeakeasyBase));
export { PostDeleteSigningCertificateHeaders };
var PostDeleteSigningCertificateRequest = /** @class */ (function (_super) {
    __extends(PostDeleteSigningCertificateRequest, _super);
    function PostDeleteSigningCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteSigningCertificateQueryParams)
    ], PostDeleteSigningCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDeleteSigningCertificateHeaders)
    ], PostDeleteSigningCertificateRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteSigningCertificateRequest.prototype, "request", void 0);
    return PostDeleteSigningCertificateRequest;
}(SpeakeasyBase));
export { PostDeleteSigningCertificateRequest };
var PostDeleteSigningCertificateResponse = /** @class */ (function (_super) {
    __extends(PostDeleteSigningCertificateResponse, _super);
    function PostDeleteSigningCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteSigningCertificateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDeleteSigningCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDeleteSigningCertificateResponse.prototype, "statusCode", void 0);
    return PostDeleteSigningCertificateResponse;
}(SpeakeasyBase));
export { PostDeleteSigningCertificateResponse };
