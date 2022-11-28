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
// PasswordPolicyType
/**
 * The password policy type.
**/
var PasswordPolicyType = /** @class */ (function (_super) {
    __extends(PasswordPolicyType, _super);
    function PasswordPolicyType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumLength" }),
        __metadata("design:type", Number)
    ], PasswordPolicyType.prototype, "minimumLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequireLowercase" }),
        __metadata("design:type", Boolean)
    ], PasswordPolicyType.prototype, "requireLowercase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequireNumbers" }),
        __metadata("design:type", Boolean)
    ], PasswordPolicyType.prototype, "requireNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequireSymbols" }),
        __metadata("design:type", Boolean)
    ], PasswordPolicyType.prototype, "requireSymbols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequireUppercase" }),
        __metadata("design:type", Boolean)
    ], PasswordPolicyType.prototype, "requireUppercase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemporaryPasswordValidityDays" }),
        __metadata("design:type", Number)
    ], PasswordPolicyType.prototype, "temporaryPasswordValidityDays", void 0);
    return PasswordPolicyType;
}(SpeakeasyBase));
export { PasswordPolicyType };
