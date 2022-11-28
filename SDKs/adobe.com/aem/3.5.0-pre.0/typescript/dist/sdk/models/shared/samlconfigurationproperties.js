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
import { SamlConfigurationPropertyItemsBoolean } from "./samlconfigurationpropertyitemsboolean";
import { SamlConfigurationPropertyItemsString } from "./samlconfigurationpropertyitemsstring";
import { SamlConfigurationPropertyItemsLong } from "./samlconfigurationpropertyitemslong";
import { SamlConfigurationPropertyItemsArray } from "./samlconfigurationpropertyitemsarray";
var SamlConfigurationProperties = /** @class */ (function (_super) {
    __extends(SamlConfigurationProperties, _super);
    function SamlConfigurationProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsBoolean)
    ], SamlConfigurationProperties.prototype, "addGroupMemberships", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "assertionConsumerServiceUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsLong)
    ], SamlConfigurationProperties.prototype, "clockTolerance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsBoolean)
    ], SamlConfigurationProperties.prototype, "createUser", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsArray)
    ], SamlConfigurationProperties.prototype, "defaultGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "defaultRedirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "digestMethod", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "groupMembershipAttribute", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsBoolean)
    ], SamlConfigurationProperties.prototype, "handleLogout", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "idpCertAlias", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsBoolean)
    ], SamlConfigurationProperties.prototype, "idpHttpRedirect", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "idpUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "keyStorePassword", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "logoutUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "nameIdFormat", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsArray)
    ], SamlConfigurationProperties.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsLong)
    ], SamlConfigurationProperties.prototype, "serviceRanking", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "serviceProviderEntityId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "signatureMethod", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "spPrivateKeyAlias", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsArray)
    ], SamlConfigurationProperties.prototype, "synchronizeAttributes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsBoolean)
    ], SamlConfigurationProperties.prototype, "useEncryption", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "userIdAttribute", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SamlConfigurationPropertyItemsString)
    ], SamlConfigurationProperties.prototype, "userIntermediatePath", void 0);
    return SamlConfigurationProperties;
}(SpeakeasyBase));
export { SamlConfigurationProperties };
