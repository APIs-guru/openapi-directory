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
import { CertificateAuthorityConfiguration } from "./certificateauthorityconfiguration";
import { FailureReasonEnum } from "./failurereasonenum";
import { KeyStorageSecurityStandardEnum } from "./keystoragesecuritystandardenum";
import { RevocationConfiguration } from "./revocationconfiguration";
import { CertificateAuthorityStatusEnum } from "./certificateauthoritystatusenum";
import { CertificateAuthorityTypeEnum } from "./certificateauthoritytypeenum";
// CertificateAuthority
/**
 * Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create your private CA. You must then call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCertificate.html">GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM).
**/
var CertificateAuthority = /** @class */ (function (_super) {
    __extends(CertificateAuthority, _super);
    function CertificateAuthority() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateAuthorityConfiguration" }),
        __metadata("design:type", CertificateAuthorityConfiguration)
    ], CertificateAuthority.prototype, "certificateAuthorityConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], CertificateAuthority.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyStorageSecurityStandard" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "keyStorageSecurityStandard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastStateChangeAt" }),
        __metadata("design:type", Date)
    ], CertificateAuthority.prototype, "lastStateChangeAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotAfter" }),
        __metadata("design:type", Date)
    ], CertificateAuthority.prototype, "notAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotBefore" }),
        __metadata("design:type", Date)
    ], CertificateAuthority.prototype, "notBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerAccount" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "ownerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RestorableUntil" }),
        __metadata("design:type", Date)
    ], CertificateAuthority.prototype, "restorableUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RevocationConfiguration" }),
        __metadata("design:type", RevocationConfiguration)
    ], CertificateAuthority.prototype, "revocationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Serial" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "type", void 0);
    return CertificateAuthority;
}(SpeakeasyBase));
export { CertificateAuthority };
