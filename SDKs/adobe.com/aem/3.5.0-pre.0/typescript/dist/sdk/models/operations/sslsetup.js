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
var SslSetupQueryParams = /** @class */ (function (_super) {
    __extends(SslSetupQueryParams, _super);
    function SslSetupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=httpsHostname" }),
        __metadata("design:type", String)
    ], SslSetupQueryParams.prototype, "httpsHostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=httpsPort" }),
        __metadata("design:type", String)
    ], SslSetupQueryParams.prototype, "httpsPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keystorePassword" }),
        __metadata("design:type", String)
    ], SslSetupQueryParams.prototype, "keystorePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keystorePasswordConfirm" }),
        __metadata("design:type", String)
    ], SslSetupQueryParams.prototype, "keystorePasswordConfirm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=truststorePassword" }),
        __metadata("design:type", String)
    ], SslSetupQueryParams.prototype, "truststorePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=truststorePasswordConfirm" }),
        __metadata("design:type", String)
    ], SslSetupQueryParams.prototype, "truststorePasswordConfirm", void 0);
    return SslSetupQueryParams;
}(SpeakeasyBase));
export { SslSetupQueryParams };
var SslSetupRequestBodyCertificateFile = /** @class */ (function (_super) {
    __extends(SslSetupRequestBodyCertificateFile, _super);
    function SslSetupRequestBodyCertificateFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=certificateFile" }),
        __metadata("design:type", String)
    ], SslSetupRequestBodyCertificateFile.prototype, "certificateFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], SslSetupRequestBodyCertificateFile.prototype, "content", void 0);
    return SslSetupRequestBodyCertificateFile;
}(SpeakeasyBase));
export { SslSetupRequestBodyCertificateFile };
var SslSetupRequestBodyPrivatekeyFile = /** @class */ (function (_super) {
    __extends(SslSetupRequestBodyPrivatekeyFile, _super);
    function SslSetupRequestBodyPrivatekeyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], SslSetupRequestBodyPrivatekeyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=privatekeyFile" }),
        __metadata("design:type", String)
    ], SslSetupRequestBodyPrivatekeyFile.prototype, "privatekeyFile", void 0);
    return SslSetupRequestBodyPrivatekeyFile;
}(SpeakeasyBase));
export { SslSetupRequestBodyPrivatekeyFile };
var SslSetupRequestBody = /** @class */ (function (_super) {
    __extends(SslSetupRequestBody, _super);
    function SslSetupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", SslSetupRequestBodyCertificateFile)
    ], SslSetupRequestBody.prototype, "certificateFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", SslSetupRequestBodyPrivatekeyFile)
    ], SslSetupRequestBody.prototype, "privatekeyFile", void 0);
    return SslSetupRequestBody;
}(SpeakeasyBase));
export { SslSetupRequestBody };
var SslSetupRequest = /** @class */ (function (_super) {
    __extends(SslSetupRequest, _super);
    function SslSetupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SslSetupQueryParams)
    ], SslSetupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SslSetupRequestBody)
    ], SslSetupRequest.prototype, "request", void 0);
    return SslSetupRequest;
}(SpeakeasyBase));
export { SslSetupRequest };
var SslSetupResponse = /** @class */ (function (_super) {
    __extends(SslSetupResponse, _super);
    function SslSetupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SslSetupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SslSetupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SslSetupResponse.prototype, "sslSetupDefaultTextPlainString", void 0);
    return SslSetupResponse;
}(SpeakeasyBase));
export { SslSetupResponse };
