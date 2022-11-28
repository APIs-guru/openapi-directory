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
import { DomainValidation } from "./domainvalidation";
import { ExtendedKeyUsage } from "./extendedkeyusage";
import { FailureReasonEnum } from "./failurereasonenum";
import { KeyAlgorithmEnum } from "./keyalgorithmenum";
import { KeyUsage } from "./keyusage";
import { CertificateOptions } from "./certificateoptions";
import { RenewalEligibilityEnum } from "./renewaleligibilityenum";
import { RenewalSummary } from "./renewalsummary";
import { RevocationReasonEnum } from "./revocationreasonenum";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { CertificateTypeEnum } from "./certificatetypeenum";
// CertificateDetail
/**
 * Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request.
**/
var CertificateDetail = /** @class */ (function (_super) {
    __extends(CertificateDetail, _super);
    function CertificateDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateArn" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "certificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "certificateAuthorityArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], CertificateDetail.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainName" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainValidationOptions", elemType: DomainValidation }),
        __metadata("design:type", Array)
    ], CertificateDetail.prototype, "domainValidationOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedKeyUsages", elemType: ExtendedKeyUsage }),
        __metadata("design:type", Array)
    ], CertificateDetail.prototype, "extendedKeyUsages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportedAt" }),
        __metadata("design:type", Date)
    ], CertificateDetail.prototype, "importedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InUseBy" }),
        __metadata("design:type", Array)
    ], CertificateDetail.prototype, "inUseBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssuedAt" }),
        __metadata("design:type", Date)
    ], CertificateDetail.prototype, "issuedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Issuer" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyAlgorithm" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "keyAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyUsages", elemType: KeyUsage }),
        __metadata("design:type", Array)
    ], CertificateDetail.prototype, "keyUsages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotAfter" }),
        __metadata("design:type", Date)
    ], CertificateDetail.prototype, "notAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotBefore" }),
        __metadata("design:type", Date)
    ], CertificateDetail.prototype, "notBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Options" }),
        __metadata("design:type", CertificateOptions)
    ], CertificateDetail.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RenewalEligibility" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "renewalEligibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RenewalSummary" }),
        __metadata("design:type", RenewalSummary)
    ], CertificateDetail.prototype, "renewalSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RevocationReason" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "revocationReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RevokedAt" }),
        __metadata("design:type", Date)
    ], CertificateDetail.prototype, "revokedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Serial" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SignatureAlgorithm" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "signatureAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subject" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubjectAlternativeNames" }),
        __metadata("design:type", Array)
    ], CertificateDetail.prototype, "subjectAlternativeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], CertificateDetail.prototype, "type", void 0);
    return CertificateDetail;
}(SpeakeasyBase));
export { CertificateDetail };
