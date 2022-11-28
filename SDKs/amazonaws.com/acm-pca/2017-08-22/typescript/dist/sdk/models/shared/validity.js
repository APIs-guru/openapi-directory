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
import { ValidityPeriodTypeEnum } from "./validityperiodtypeenum";
// Validity
/**
 * <p>Validity specifies the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the validity of a certificate starts or expires, or as a span of time after issuance, stated in days, months, or years. For more information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280.</p> <p>ACM Private CA API consumes the <code>Validity</code> data type differently in two distinct parameters of the <code>IssueCertificate</code> action. The required parameter <code>IssueCertificate</code>:<code>Validity</code> specifies the end of a certificate's validity period. The optional parameter <code>IssueCertificate</code>:<code>ValidityNotBefore</code> specifies a customized starting time for the validity period.</p>
**/
var Validity = /** @class */ (function (_super) {
    __extends(Validity, _super);
    function Validity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], Validity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Value" }),
        __metadata("design:type", Number)
    ], Validity.prototype, "value", void 0);
    return Validity;
}(SpeakeasyBase));
export { Validity };
