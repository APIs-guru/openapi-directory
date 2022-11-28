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
import { Field } from "./field";
import { File } from "./file";
import { FieldInput } from "./field";
import { FileInput } from "./file";
export var FullItemStateEnum;
(function (FullItemStateEnum) {
    FullItemStateEnum["Archived"] = "ARCHIVED";
    FullItemStateEnum["Deleted"] = "DELETED";
})(FullItemStateEnum || (FullItemStateEnum = {}));
export var FullItemCategoryEnum;
(function (FullItemCategoryEnum) {
    FullItemCategoryEnum["Login"] = "LOGIN";
    FullItemCategoryEnum["Password"] = "PASSWORD";
    FullItemCategoryEnum["ApiCredential"] = "API_CREDENTIAL";
    FullItemCategoryEnum["Server"] = "SERVER";
    FullItemCategoryEnum["Database"] = "DATABASE";
    FullItemCategoryEnum["CreditCard"] = "CREDIT_CARD";
    FullItemCategoryEnum["Membership"] = "MEMBERSHIP";
    FullItemCategoryEnum["Passport"] = "PASSPORT";
    FullItemCategoryEnum["SoftwareLicense"] = "SOFTWARE_LICENSE";
    FullItemCategoryEnum["OutdoorLicense"] = "OUTDOOR_LICENSE";
    FullItemCategoryEnum["SecureNote"] = "SECURE_NOTE";
    FullItemCategoryEnum["WirelessRouter"] = "WIRELESS_ROUTER";
    FullItemCategoryEnum["BankAccount"] = "BANK_ACCOUNT";
    FullItemCategoryEnum["DriverLicense"] = "DRIVER_LICENSE";
    FullItemCategoryEnum["Identity"] = "IDENTITY";
    FullItemCategoryEnum["RewardProgram"] = "REWARD_PROGRAM";
    FullItemCategoryEnum["Document"] = "DOCUMENT";
    FullItemCategoryEnum["EmailAccount"] = "EMAIL_ACCOUNT";
    FullItemCategoryEnum["SocialSecurityNumber"] = "SOCIAL_SECURITY_NUMBER";
    FullItemCategoryEnum["Custom"] = "CUSTOM";
})(FullItemCategoryEnum || (FullItemCategoryEnum = {}));
var FullItemSections = /** @class */ (function (_super) {
    __extends(FullItemSections, _super);
    function FullItemSections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FullItemSections.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], FullItemSections.prototype, "label", void 0);
    return FullItemSections;
}(SpeakeasyBase));
export { FullItemSections };
var FullItemUrls = /** @class */ (function (_super) {
    __extends(FullItemUrls, _super);
    function FullItemUrls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], FullItemUrls.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], FullItemUrls.prototype, "primary", void 0);
    return FullItemUrls;
}(SpeakeasyBase));
export { FullItemUrls };
var FullItemVault = /** @class */ (function (_super) {
    __extends(FullItemVault, _super);
    function FullItemVault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FullItemVault.prototype, "id", void 0);
    return FullItemVault;
}(SpeakeasyBase));
export { FullItemVault };
var FullItem = /** @class */ (function (_super) {
    __extends(FullItem, _super);
    function FullItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], FullItem.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], FullItem.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=favorite" }),
        __metadata("design:type", Boolean)
    ], FullItem.prototype, "favorite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: Field }),
        __metadata("design:type", Array)
    ], FullItem.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: File }),
        __metadata("design:type", Array)
    ], FullItem.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FullItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastEditedBy" }),
        __metadata("design:type", String)
    ], FullItem.prototype, "lastEditedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sections", elemType: FullItemSections }),
        __metadata("design:type", Array)
    ], FullItem.prototype, "sections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], FullItem.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], FullItem.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], FullItem.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], FullItem.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urls", elemType: FullItemUrls }),
        __metadata("design:type", Array)
    ], FullItem.prototype, "urls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vault" }),
        __metadata("design:type", FullItemVault)
    ], FullItem.prototype, "vault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], FullItem.prototype, "version", void 0);
    return FullItem;
}(SpeakeasyBase));
export { FullItem };
var FullItemInput = /** @class */ (function (_super) {
    __extends(FullItemInput, _super);
    function FullItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], FullItemInput.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=favorite" }),
        __metadata("design:type", Boolean)
    ], FullItemInput.prototype, "favorite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: FieldInput }),
        __metadata("design:type", Array)
    ], FullItemInput.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: FileInput }),
        __metadata("design:type", Array)
    ], FullItemInput.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FullItemInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sections", elemType: FullItemSections }),
        __metadata("design:type", Array)
    ], FullItemInput.prototype, "sections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], FullItemInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], FullItemInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urls", elemType: FullItemUrls }),
        __metadata("design:type", Array)
    ], FullItemInput.prototype, "urls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vault" }),
        __metadata("design:type", FullItemVault)
    ], FullItemInput.prototype, "vault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], FullItemInput.prototype, "version", void 0);
    return FullItemInput;
}(SpeakeasyBase));
export { FullItemInput };
