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
// Certificate
/**
 * The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.
**/
var Certificate = /** @class */ (function (_super) {
    __extends(Certificate, _super);
    function Certificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateArn" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "certificateArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateCreationDate" }),
        __metadata("design:type", Date)
    ], Certificate.prototype, "certificateCreationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateIdentifier" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "certificateIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateOwner" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "certificateOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificatePem" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "certificatePem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateWallet" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "certificateWallet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyLength" }),
        __metadata("design:type", Number)
    ], Certificate.prototype, "keyLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SigningAlgorithm" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "signingAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidFromDate" }),
        __metadata("design:type", Date)
    ], Certificate.prototype, "validFromDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidToDate" }),
        __metadata("design:type", Date)
    ], Certificate.prototype, "validToDate", void 0);
    return Certificate;
}(SpeakeasyBase));
export { Certificate };
