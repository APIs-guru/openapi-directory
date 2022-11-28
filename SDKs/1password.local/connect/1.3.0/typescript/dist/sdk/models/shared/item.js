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
export var ItemCategoryEnum;
(function (ItemCategoryEnum) {
    ItemCategoryEnum["Login"] = "LOGIN";
    ItemCategoryEnum["Password"] = "PASSWORD";
    ItemCategoryEnum["ApiCredential"] = "API_CREDENTIAL";
    ItemCategoryEnum["Server"] = "SERVER";
    ItemCategoryEnum["Database"] = "DATABASE";
    ItemCategoryEnum["CreditCard"] = "CREDIT_CARD";
    ItemCategoryEnum["Membership"] = "MEMBERSHIP";
    ItemCategoryEnum["Passport"] = "PASSPORT";
    ItemCategoryEnum["SoftwareLicense"] = "SOFTWARE_LICENSE";
    ItemCategoryEnum["OutdoorLicense"] = "OUTDOOR_LICENSE";
    ItemCategoryEnum["SecureNote"] = "SECURE_NOTE";
    ItemCategoryEnum["WirelessRouter"] = "WIRELESS_ROUTER";
    ItemCategoryEnum["BankAccount"] = "BANK_ACCOUNT";
    ItemCategoryEnum["DriverLicense"] = "DRIVER_LICENSE";
    ItemCategoryEnum["Identity"] = "IDENTITY";
    ItemCategoryEnum["RewardProgram"] = "REWARD_PROGRAM";
    ItemCategoryEnum["Document"] = "DOCUMENT";
    ItemCategoryEnum["EmailAccount"] = "EMAIL_ACCOUNT";
    ItemCategoryEnum["SocialSecurityNumber"] = "SOCIAL_SECURITY_NUMBER";
    ItemCategoryEnum["Custom"] = "CUSTOM";
})(ItemCategoryEnum || (ItemCategoryEnum = {}));
export var ItemStateEnum;
(function (ItemStateEnum) {
    ItemStateEnum["Archived"] = "ARCHIVED";
    ItemStateEnum["Deleted"] = "DELETED";
})(ItemStateEnum || (ItemStateEnum = {}));
var ItemUrls = /** @class */ (function (_super) {
    __extends(ItemUrls, _super);
    function ItemUrls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ItemUrls.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], ItemUrls.prototype, "primary", void 0);
    return ItemUrls;
}(SpeakeasyBase));
export { ItemUrls };
var ItemVault = /** @class */ (function (_super) {
    __extends(ItemVault, _super);
    function ItemVault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ItemVault.prototype, "id", void 0);
    return ItemVault;
}(SpeakeasyBase));
export { ItemVault };
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], Item.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Item.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=favorite" }),
        __metadata("design:type", Boolean)
    ], Item.prototype, "favorite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Item.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastEditedBy" }),
        __metadata("design:type", String)
    ], Item.prototype, "lastEditedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Item.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Item.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Item.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], Item.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urls", elemType: ItemUrls }),
        __metadata("design:type", Array)
    ], Item.prototype, "urls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vault" }),
        __metadata("design:type", ItemVault)
    ], Item.prototype, "vault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Item.prototype, "version", void 0);
    return Item;
}(SpeakeasyBase));
export { Item };
