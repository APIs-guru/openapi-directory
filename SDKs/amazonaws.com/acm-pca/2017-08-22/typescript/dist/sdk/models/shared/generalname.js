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
import { Asn1Subject } from "./asn1subject";
import { EdiPartyName } from "./edipartyname";
import { OtherName } from "./othername";
// GeneralName
/**
 * Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error.
**/
var GeneralName = /** @class */ (function (_super) {
    __extends(GeneralName, _super);
    function GeneralName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DirectoryName" }),
        __metadata("design:type", Asn1Subject)
    ], GeneralName.prototype, "directoryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsName" }),
        __metadata("design:type", String)
    ], GeneralName.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EdiPartyName" }),
        __metadata("design:type", EdiPartyName)
    ], GeneralName.prototype, "ediPartyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpAddress" }),
        __metadata("design:type", String)
    ], GeneralName.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherName" }),
        __metadata("design:type", OtherName)
    ], GeneralName.prototype, "otherName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegisteredId" }),
        __metadata("design:type", String)
    ], GeneralName.prototype, "registeredId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rfc822Name" }),
        __metadata("design:type", String)
    ], GeneralName.prototype, "rfc822Name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UniformResourceIdentifier" }),
        __metadata("design:type", String)
    ], GeneralName.prototype, "uniformResourceIdentifier", void 0);
    return GeneralName;
}(SpeakeasyBase));
export { GeneralName };
