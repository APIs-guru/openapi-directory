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
// KeyUsage
/**
 * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
**/
var KeyUsage = /** @class */ (function (_super) {
    __extends(KeyUsage, _super);
    function KeyUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CRLSign" }),
        __metadata("design:type", Boolean)
    ], KeyUsage.prototype, "crlSign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataEncipherment" }),
        __metadata("design:type", Boolean)
    ], KeyUsage.prototype, "dataEncipherment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DecipherOnly" }),
        __metadata("design:type", Boolean)
    ], KeyUsage.prototype, "decipherOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DigitalSignature" }),
        __metadata("design:type", Boolean)
    ], KeyUsage.prototype, "digitalSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncipherOnly" }),
        __metadata("design:type", Boolean)
    ], KeyUsage.prototype, "encipherOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyAgreement" }),
        __metadata("design:type", Boolean)
    ], KeyUsage.prototype, "keyAgreement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyCertSign" }),
        __metadata("design:type", Boolean)
    ], KeyUsage.prototype, "keyCertSign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyEncipherment" }),
        __metadata("design:type", Boolean)
    ], KeyUsage.prototype, "keyEncipherment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonRepudiation" }),
        __metadata("design:type", Boolean)
    ], KeyUsage.prototype, "nonRepudiation", void 0);
    return KeyUsage;
}(SpeakeasyBase));
export { KeyUsage };
