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
export var GetUpdateSigningCertificateActionEnum;
(function (GetUpdateSigningCertificateActionEnum) {
    GetUpdateSigningCertificateActionEnum["UpdateSigningCertificate"] = "UpdateSigningCertificate";
})(GetUpdateSigningCertificateActionEnum || (GetUpdateSigningCertificateActionEnum = {}));
export var GetUpdateSigningCertificateStatusEnum;
(function (GetUpdateSigningCertificateStatusEnum) {
    GetUpdateSigningCertificateStatusEnum["Active"] = "Active";
    GetUpdateSigningCertificateStatusEnum["Inactive"] = "Inactive";
})(GetUpdateSigningCertificateStatusEnum || (GetUpdateSigningCertificateStatusEnum = {}));
export var GetUpdateSigningCertificateVersionEnum;
(function (GetUpdateSigningCertificateVersionEnum) {
    GetUpdateSigningCertificateVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUpdateSigningCertificateVersionEnum || (GetUpdateSigningCertificateVersionEnum = {}));
var GetUpdateSigningCertificateQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateSigningCertificateQueryParams, _super);
    function GetUpdateSigningCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CertificateId" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateQueryParams.prototype, "certificateId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateQueryParams.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateQueryParams.prototype, "userName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateQueryParams.prototype, "version", void 0);
    return GetUpdateSigningCertificateQueryParams;
}(SpeakeasyBase));
export { GetUpdateSigningCertificateQueryParams };
var GetUpdateSigningCertificateHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateSigningCertificateHeaders, _super);
    function GetUpdateSigningCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateSigningCertificateHeaders;
}(SpeakeasyBase));
export { GetUpdateSigningCertificateHeaders };
var GetUpdateSigningCertificateRequest = /** @class */ (function (_super) {
    __extends(GetUpdateSigningCertificateRequest, _super);
    function GetUpdateSigningCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateSigningCertificateQueryParams)
    ], GetUpdateSigningCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetUpdateSigningCertificateHeaders)
    ], GetUpdateSigningCertificateRequest.prototype, "headers", void 0);
    return GetUpdateSigningCertificateRequest;
}(SpeakeasyBase));
export { GetUpdateSigningCertificateRequest };
var GetUpdateSigningCertificateResponse = /** @class */ (function (_super) {
    __extends(GetUpdateSigningCertificateResponse, _super);
    function GetUpdateSigningCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateSigningCertificateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetUpdateSigningCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetUpdateSigningCertificateResponse.prototype, "statusCode", void 0);
    return GetUpdateSigningCertificateResponse;
}(SpeakeasyBase));
export { GetUpdateSigningCertificateResponse };
