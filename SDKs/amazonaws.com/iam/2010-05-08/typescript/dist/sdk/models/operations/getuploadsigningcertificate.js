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
export var GetUploadSigningCertificateActionEnum;
(function (GetUploadSigningCertificateActionEnum) {
    GetUploadSigningCertificateActionEnum["UploadSigningCertificate"] = "UploadSigningCertificate";
})(GetUploadSigningCertificateActionEnum || (GetUploadSigningCertificateActionEnum = {}));
export var GetUploadSigningCertificateVersionEnum;
(function (GetUploadSigningCertificateVersionEnum) {
    GetUploadSigningCertificateVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUploadSigningCertificateVersionEnum || (GetUploadSigningCertificateVersionEnum = {}));
var GetUploadSigningCertificateQueryParams = /** @class */ (function (_super) {
    __extends(GetUploadSigningCertificateQueryParams, _super);
    function GetUploadSigningCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CertificateBody" }),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateQueryParams.prototype, "certificateBody", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateQueryParams.prototype, "version", void 0);
    return GetUploadSigningCertificateQueryParams;
}(SpeakeasyBase));
export { GetUploadSigningCertificateQueryParams };
var GetUploadSigningCertificateHeaders = /** @class */ (function (_super) {
    __extends(GetUploadSigningCertificateHeaders, _super);
    function GetUploadSigningCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUploadSigningCertificateHeaders;
}(SpeakeasyBase));
export { GetUploadSigningCertificateHeaders };
var GetUploadSigningCertificateRequest = /** @class */ (function (_super) {
    __extends(GetUploadSigningCertificateRequest, _super);
    function GetUploadSigningCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUploadSigningCertificateQueryParams)
    ], GetUploadSigningCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetUploadSigningCertificateHeaders)
    ], GetUploadSigningCertificateRequest.prototype, "headers", void 0);
    return GetUploadSigningCertificateRequest;
}(SpeakeasyBase));
export { GetUploadSigningCertificateRequest };
var GetUploadSigningCertificateResponse = /** @class */ (function (_super) {
    __extends(GetUploadSigningCertificateResponse, _super);
    function GetUploadSigningCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetUploadSigningCertificateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUploadSigningCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUploadSigningCertificateResponse.prototype, "statusCode", void 0);
    return GetUploadSigningCertificateResponse;
}(SpeakeasyBase));
export { GetUploadSigningCertificateResponse };
