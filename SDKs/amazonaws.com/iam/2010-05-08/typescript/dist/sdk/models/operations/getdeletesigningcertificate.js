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
export var GetDeleteSigningCertificateActionEnum;
(function (GetDeleteSigningCertificateActionEnum) {
    GetDeleteSigningCertificateActionEnum["DeleteSigningCertificate"] = "DeleteSigningCertificate";
})(GetDeleteSigningCertificateActionEnum || (GetDeleteSigningCertificateActionEnum = {}));
export var GetDeleteSigningCertificateVersionEnum;
(function (GetDeleteSigningCertificateVersionEnum) {
    GetDeleteSigningCertificateVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDeleteSigningCertificateVersionEnum || (GetDeleteSigningCertificateVersionEnum = {}));
var GetDeleteSigningCertificateQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteSigningCertificateQueryParams, _super);
    function GetDeleteSigningCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CertificateId" }),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateQueryParams.prototype, "certificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateQueryParams.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateQueryParams.prototype, "version", void 0);
    return GetDeleteSigningCertificateQueryParams;
}(SpeakeasyBase));
export { GetDeleteSigningCertificateQueryParams };
var GetDeleteSigningCertificateHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteSigningCertificateHeaders, _super);
    function GetDeleteSigningCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteSigningCertificateHeaders;
}(SpeakeasyBase));
export { GetDeleteSigningCertificateHeaders };
var GetDeleteSigningCertificateRequest = /** @class */ (function (_super) {
    __extends(GetDeleteSigningCertificateRequest, _super);
    function GetDeleteSigningCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteSigningCertificateQueryParams)
    ], GetDeleteSigningCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteSigningCertificateHeaders)
    ], GetDeleteSigningCertificateRequest.prototype, "headers", void 0);
    return GetDeleteSigningCertificateRequest;
}(SpeakeasyBase));
export { GetDeleteSigningCertificateRequest };
var GetDeleteSigningCertificateResponse = /** @class */ (function (_super) {
    __extends(GetDeleteSigningCertificateResponse, _super);
    function GetDeleteSigningCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteSigningCertificateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteSigningCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteSigningCertificateResponse.prototype, "statusCode", void 0);
    return GetDeleteSigningCertificateResponse;
}(SpeakeasyBase));
export { GetDeleteSigningCertificateResponse };
