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
import { ClientCertAuthSettings } from "./clientcertauthsettings";
import { CertificateStateEnum } from "./certificatestateenum";
import { CertificateTypeEnum } from "./certificatetypeenum";
// Certificate
/**
 * Information about the certificate.
**/
var Certificate = /** @class */ (function (_super) {
    __extends(Certificate, _super);
    function Certificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificateId" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "certificateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientCertAuthSettings" }),
        __metadata("design:type", ClientCertAuthSettings)
    ], Certificate.prototype, "clientCertAuthSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CommonName" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "commonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpiryDateTime" }),
        __metadata("design:type", Date)
    ], Certificate.prototype, "expiryDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegisteredDateTime" }),
        __metadata("design:type", Date)
    ], Certificate.prototype, "registeredDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StateReason" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "stateReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "type", void 0);
    return Certificate;
}(SpeakeasyBase));
export { Certificate };
