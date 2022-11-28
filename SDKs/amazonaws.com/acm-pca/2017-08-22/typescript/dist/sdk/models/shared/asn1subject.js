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
// Asn1Subject
/**
 * Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
**/
var Asn1Subject = /** @class */ (function (_super) {
    __extends(Asn1Subject, _super);
    function Asn1Subject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CommonName" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "commonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DistinguishedNameQualifier" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "distinguishedNameQualifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GenerationQualifier" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "generationQualifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GivenName" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "givenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initials" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "initials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Locality" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "locality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Organization" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganizationalUnit" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "organizationalUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Pseudonym" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "pseudonym", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SerialNumber" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Surname" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "surname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], Asn1Subject.prototype, "title", void 0);
    return Asn1Subject;
}(SpeakeasyBase));
export { Asn1Subject };
