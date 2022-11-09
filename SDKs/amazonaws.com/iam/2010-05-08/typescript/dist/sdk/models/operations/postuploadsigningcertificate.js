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
export var PostUploadSigningCertificateActionEnum;
(function (PostUploadSigningCertificateActionEnum) {
    PostUploadSigningCertificateActionEnum["UploadSigningCertificate"] = "UploadSigningCertificate";
})(PostUploadSigningCertificateActionEnum || (PostUploadSigningCertificateActionEnum = {}));
export var PostUploadSigningCertificateVersionEnum;
(function (PostUploadSigningCertificateVersionEnum) {
    PostUploadSigningCertificateVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUploadSigningCertificateVersionEnum || (PostUploadSigningCertificateVersionEnum = {}));
var PostUploadSigningCertificateQueryParams = /** @class */ (function (_super) {
    __extends(PostUploadSigningCertificateQueryParams, _super);
    function PostUploadSigningCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUploadSigningCertificateQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUploadSigningCertificateQueryParams.prototype, "version", void 0);
    return PostUploadSigningCertificateQueryParams;
}(SpeakeasyBase));
export { PostUploadSigningCertificateQueryParams };
var PostUploadSigningCertificateHeaders = /** @class */ (function (_super) {
    __extends(PostUploadSigningCertificateHeaders, _super);
    function PostUploadSigningCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUploadSigningCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUploadSigningCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUploadSigningCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUploadSigningCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUploadSigningCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUploadSigningCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUploadSigningCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUploadSigningCertificateHeaders;
}(SpeakeasyBase));
export { PostUploadSigningCertificateHeaders };
var PostUploadSigningCertificateRequest = /** @class */ (function (_super) {
    __extends(PostUploadSigningCertificateRequest, _super);
    function PostUploadSigningCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostUploadSigningCertificateQueryParams)
    ], PostUploadSigningCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUploadSigningCertificateHeaders)
    ], PostUploadSigningCertificateRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUploadSigningCertificateRequest.prototype, "request", void 0);
    return PostUploadSigningCertificateRequest;
}(SpeakeasyBase));
export { PostUploadSigningCertificateRequest };
var PostUploadSigningCertificateResponse = /** @class */ (function (_super) {
    __extends(PostUploadSigningCertificateResponse, _super);
    function PostUploadSigningCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostUploadSigningCertificateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUploadSigningCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUploadSigningCertificateResponse.prototype, "statusCode", void 0);
    return PostUploadSigningCertificateResponse;
}(SpeakeasyBase));
export { PostUploadSigningCertificateResponse };
