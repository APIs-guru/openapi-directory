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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var VaultTypeEnum;
(function (VaultTypeEnum) {
    VaultTypeEnum["UserCreated"] = "USER_CREATED";
    VaultTypeEnum["Personal"] = "PERSONAL";
    VaultTypeEnum["Everyone"] = "EVERYONE";
    VaultTypeEnum["Transfer"] = "TRANSFER";
})(VaultTypeEnum || (VaultTypeEnum = {}));
var Vault = /** @class */ (function (_super) {
    __extends(Vault, _super);
    function Vault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=attributeVersion" }),
        __metadata("design:type", Number)
    ], Vault.prototype, "attributeVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=contentVersion" }),
        __metadata("design:type", Number)
    ], Vault.prototype, "contentVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Vault.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Vault.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Vault.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=items" }),
        __metadata("design:type", Number)
    ], Vault.prototype, "items", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Vault.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Vault.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], Vault.prototype, "updatedAt", void 0);
    return Vault;
}(SpeakeasyBase));
export { Vault };
