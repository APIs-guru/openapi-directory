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
export var GetImportClientVpnClientCertificateRevocationListActionEnum;
(function (GetImportClientVpnClientCertificateRevocationListActionEnum) {
    GetImportClientVpnClientCertificateRevocationListActionEnum["ImportClientVpnClientCertificateRevocationList"] = "ImportClientVpnClientCertificateRevocationList";
})(GetImportClientVpnClientCertificateRevocationListActionEnum || (GetImportClientVpnClientCertificateRevocationListActionEnum = {}));
export var GetImportClientVpnClientCertificateRevocationListVersionEnum;
(function (GetImportClientVpnClientCertificateRevocationListVersionEnum) {
    GetImportClientVpnClientCertificateRevocationListVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetImportClientVpnClientCertificateRevocationListVersionEnum || (GetImportClientVpnClientCertificateRevocationListVersionEnum = {}));
var GetImportClientVpnClientCertificateRevocationListQueryParams = /** @class */ (function (_super) {
    __extends(GetImportClientVpnClientCertificateRevocationListQueryParams, _super);
    function GetImportClientVpnClientCertificateRevocationListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CertificateRevocationList" }),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListQueryParams.prototype, "certificateRevocationList", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" }),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListQueryParams.prototype, "clientVpnEndpointId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetImportClientVpnClientCertificateRevocationListQueryParams.prototype, "dryRun", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListQueryParams.prototype, "version", void 0);
    return GetImportClientVpnClientCertificateRevocationListQueryParams;
}(SpeakeasyBase));
export { GetImportClientVpnClientCertificateRevocationListQueryParams };
var GetImportClientVpnClientCertificateRevocationListHeaders = /** @class */ (function (_super) {
    __extends(GetImportClientVpnClientCertificateRevocationListHeaders, _super);
    function GetImportClientVpnClientCertificateRevocationListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetImportClientVpnClientCertificateRevocationListHeaders;
}(SpeakeasyBase));
export { GetImportClientVpnClientCertificateRevocationListHeaders };
var GetImportClientVpnClientCertificateRevocationListRequest = /** @class */ (function (_super) {
    __extends(GetImportClientVpnClientCertificateRevocationListRequest, _super);
    function GetImportClientVpnClientCertificateRevocationListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetImportClientVpnClientCertificateRevocationListQueryParams)
    ], GetImportClientVpnClientCertificateRevocationListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetImportClientVpnClientCertificateRevocationListHeaders)
    ], GetImportClientVpnClientCertificateRevocationListRequest.prototype, "headers", void 0);
    return GetImportClientVpnClientCertificateRevocationListRequest;
}(SpeakeasyBase));
export { GetImportClientVpnClientCertificateRevocationListRequest };
var GetImportClientVpnClientCertificateRevocationListResponse = /** @class */ (function (_super) {
    __extends(GetImportClientVpnClientCertificateRevocationListResponse, _super);
    function GetImportClientVpnClientCertificateRevocationListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetImportClientVpnClientCertificateRevocationListResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetImportClientVpnClientCertificateRevocationListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetImportClientVpnClientCertificateRevocationListResponse.prototype, "statusCode", void 0);
    return GetImportClientVpnClientCertificateRevocationListResponse;
}(SpeakeasyBase));
export { GetImportClientVpnClientCertificateRevocationListResponse };
