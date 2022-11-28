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
import { CertificateModeEnum } from "./certificatemodeenum";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { TransferData } from "./transferdata";
import { CertificateValidity } from "./certificatevalidity";
// CertificateDescription
/**
 * Describes a certificate.
**/
var CertificateDescription = /** @class */ (function (_super) {
    __extends(CertificateDescription, _super);
    function CertificateDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificateId" }),
        __metadata("design:type", String)
    ], CertificateDescription.prototype, "caCertificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateArn" }),
        __metadata("design:type", String)
    ], CertificateDescription.prototype, "certificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateId" }),
        __metadata("design:type", String)
    ], CertificateDescription.prototype, "certificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateMode" }),
        __metadata("design:type", String)
    ], CertificateDescription.prototype, "certificateMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificatePem" }),
        __metadata("design:type", String)
    ], CertificateDescription.prototype, "certificatePem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", Date)
    ], CertificateDescription.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerVersion" }),
        __metadata("design:type", Number)
    ], CertificateDescription.prototype, "customerVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generationId" }),
        __metadata("design:type", String)
    ], CertificateDescription.prototype, "generationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedDate" }),
        __metadata("design:type", Date)
    ], CertificateDescription.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownedBy" }),
        __metadata("design:type", String)
    ], CertificateDescription.prototype, "ownedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousOwnedBy" }),
        __metadata("design:type", String)
    ], CertificateDescription.prototype, "previousOwnedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CertificateDescription.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferData" }),
        __metadata("design:type", TransferData)
    ], CertificateDescription.prototype, "transferData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validity" }),
        __metadata("design:type", CertificateValidity)
    ], CertificateDescription.prototype, "validity", void 0);
    return CertificateDescription;
}(SpeakeasyBase));
export { CertificateDescription };
