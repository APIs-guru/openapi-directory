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
import { CsrExtensions } from "./csrextensions";
import { KeyAlgorithmEnum } from "./keyalgorithmenum";
import { SigningAlgorithmEnum } from "./signingalgorithmenum";
import { Asn1Subject } from "./asn1subject";
// CertificateAuthorityConfiguration
/**
 * Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.
**/
var CertificateAuthorityConfiguration = /** @class */ (function (_super) {
    __extends(CertificateAuthorityConfiguration, _super);
    function CertificateAuthorityConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CsrExtensions" }),
        __metadata("design:type", CsrExtensions)
    ], CertificateAuthorityConfiguration.prototype, "csrExtensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyAlgorithm" }),
        __metadata("design:type", String)
    ], CertificateAuthorityConfiguration.prototype, "keyAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SigningAlgorithm" }),
        __metadata("design:type", String)
    ], CertificateAuthorityConfiguration.prototype, "signingAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subject" }),
        __metadata("design:type", Asn1Subject)
    ], CertificateAuthorityConfiguration.prototype, "subject", void 0);
    return CertificateAuthorityConfiguration;
}(SpeakeasyBase));
export { CertificateAuthorityConfiguration };
