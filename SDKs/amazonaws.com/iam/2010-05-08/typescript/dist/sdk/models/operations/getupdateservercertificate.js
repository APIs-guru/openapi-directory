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
export var GetUpdateServerCertificateActionEnum;
(function (GetUpdateServerCertificateActionEnum) {
    GetUpdateServerCertificateActionEnum["UpdateServerCertificate"] = "UpdateServerCertificate";
})(GetUpdateServerCertificateActionEnum || (GetUpdateServerCertificateActionEnum = {}));
export var GetUpdateServerCertificateVersionEnum;
(function (GetUpdateServerCertificateVersionEnum) {
    GetUpdateServerCertificateVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUpdateServerCertificateVersionEnum || (GetUpdateServerCertificateVersionEnum = {}));
var GetUpdateServerCertificateQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateServerCertificateQueryParams, _super);
    function GetUpdateServerCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewPath" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateQueryParams.prototype, "newPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewServerCertificateName" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateQueryParams.prototype, "newServerCertificateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServerCertificateName" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateQueryParams.prototype, "serverCertificateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateQueryParams.prototype, "version", void 0);
    return GetUpdateServerCertificateQueryParams;
}(SpeakeasyBase));
export { GetUpdateServerCertificateQueryParams };
var GetUpdateServerCertificateHeaders = /** @class */ (function (_super) {
    __extends(GetUpdateServerCertificateHeaders, _super);
    function GetUpdateServerCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdateServerCertificateHeaders;
}(SpeakeasyBase));
export { GetUpdateServerCertificateHeaders };
var GetUpdateServerCertificateRequest = /** @class */ (function (_super) {
    __extends(GetUpdateServerCertificateRequest, _super);
    function GetUpdateServerCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateServerCertificateQueryParams)
    ], GetUpdateServerCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUpdateServerCertificateHeaders)
    ], GetUpdateServerCertificateRequest.prototype, "headers", void 0);
    return GetUpdateServerCertificateRequest;
}(SpeakeasyBase));
export { GetUpdateServerCertificateRequest };
var GetUpdateServerCertificateResponse = /** @class */ (function (_super) {
    __extends(GetUpdateServerCertificateResponse, _super);
    function GetUpdateServerCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateServerCertificateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUpdateServerCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUpdateServerCertificateResponse.prototype, "statusCode", void 0);
    return GetUpdateServerCertificateResponse;
}(SpeakeasyBase));
export { GetUpdateServerCertificateResponse };
