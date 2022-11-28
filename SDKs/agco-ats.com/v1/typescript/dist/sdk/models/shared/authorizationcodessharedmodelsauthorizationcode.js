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
import { AuthorizationCodesSharedModelsParameter } from "./authorizationcodessharedmodelsparameter";
// AuthorizationCodesSharedModelsAuthorizationCode
/**
 * Represents the model containing an authorization code used to unlock a feature in machines and EDT
**/
var AuthorizationCodesSharedModelsAuthorizationCode = /** @class */ (function (_super) {
    __extends(AuthorizationCodesSharedModelsAuthorizationCode, _super);
    function AuthorizationCodesSharedModelsAuthorizationCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], AuthorizationCodesSharedModelsAuthorizationCode.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedByUserID" }),
        __metadata("design:type", Number)
    ], AuthorizationCodesSharedModelsAuthorizationCode.prototype, "createdByUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], AuthorizationCodesSharedModelsAuthorizationCode.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataParameters", elemType: AuthorizationCodesSharedModelsParameter }),
        __metadata("design:type", Array)
    ], AuthorizationCodesSharedModelsAuthorizationCode.prototype, "dataParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefinitionID" }),
        __metadata("design:type", String)
    ], AuthorizationCodesSharedModelsAuthorizationCode.prototype, "definitionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeletedByUserID" }),
        __metadata("design:type", Number)
    ], AuthorizationCodesSharedModelsAuthorizationCode.prototype, "deletedByUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeletedDate" }),
        __metadata("design:type", Date)
    ], AuthorizationCodesSharedModelsAuthorizationCode.prototype, "deletedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", Date)
    ], AuthorizationCodesSharedModelsAuthorizationCode.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ID" }),
        __metadata("design:type", Number)
    ], AuthorizationCodesSharedModelsAuthorizationCode.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsDeleted" }),
        __metadata("design:type", Boolean)
    ], AuthorizationCodesSharedModelsAuthorizationCode.prototype, "isDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationParameters", elemType: AuthorizationCodesSharedModelsParameter }),
        __metadata("design:type", Array)
    ], AuthorizationCodesSharedModelsAuthorizationCode.prototype, "validationParameters", void 0);
    return AuthorizationCodesSharedModelsAuthorizationCode;
}(SpeakeasyBase));
export { AuthorizationCodesSharedModelsAuthorizationCode };
