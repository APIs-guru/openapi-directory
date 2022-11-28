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
import { AuthorizationCodesSharedModelsDataField } from "./authorizationcodessharedmodelsdatafield";
import { AuthorizationCodesSharedModelsValidationField } from "./authorizationcodessharedmodelsvalidationfield";
export var AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum;
(function (AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum) {
    AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum["Weeks"] = "Weeks";
    AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum["Days"] = "Days";
    AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum["Hours"] = "Hours";
    AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum["Minutes"] = "Minutes";
})(AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum || (AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum = {}));
// AuthorizationCodesSharedModelsAuthorizationCodeDefinition
/**
 * Represents the model used to define how a type of authorization code is generated.
**/
var AuthorizationCodesSharedModelsAuthorizationCodeDefinition = /** @class */ (function (_super) {
    __extends(AuthorizationCodesSharedModelsAuthorizationCodeDefinition, _super);
    function AuthorizationCodesSharedModelsAuthorizationCodeDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorizationID" }),
        __metadata("design:type", String)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "authorizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedByUserID" }),
        __metadata("design:type", Number)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "createdByUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataFields", elemType: AuthorizationCodesSharedModelsDataField }),
        __metadata("design:type", Array)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "dataFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeletedByUserID" }),
        __metadata("design:type", Number)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "deletedByUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeletedDate" }),
        __metadata("design:type", Date)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "deletedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DurationAccuracy" }),
        __metadata("design:type", Number)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "durationAccuracy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DurationAmount" }),
        __metadata("design:type", Number)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "durationAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DurationUnits" }),
        __metadata("design:type", String)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "durationUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HashLength" }),
        __metadata("design:type", Number)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "hashLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ID" }),
        __metadata("design:type", String)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsDeleted" }),
        __metadata("design:type", Boolean)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "isDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RandomLength" }),
        __metadata("design:type", Number)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "randomLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidationFields", elemType: AuthorizationCodesSharedModelsValidationField }),
        __metadata("design:type", Array)
    ], AuthorizationCodesSharedModelsAuthorizationCodeDefinition.prototype, "validationFields", void 0);
    return AuthorizationCodesSharedModelsAuthorizationCodeDefinition;
}(SpeakeasyBase));
export { AuthorizationCodesSharedModelsAuthorizationCodeDefinition };
