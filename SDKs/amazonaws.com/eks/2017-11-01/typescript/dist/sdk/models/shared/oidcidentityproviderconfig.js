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
import { ConfigStatusEnum } from "./configstatusenum";
// OidcIdentityProviderConfig
/**
 * An object that represents the configuration for an OpenID Connect (OIDC) identity provider.
**/
var OidcIdentityProviderConfig = /** @class */ (function (_super) {
    __extends(OidcIdentityProviderConfig, _super);
    function OidcIdentityProviderConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], OidcIdentityProviderConfig.prototype, "clientId", void 0);
    __decorate([
        Metadata({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], OidcIdentityProviderConfig.prototype, "clusterName", void 0);
    __decorate([
        Metadata({ data: "json, name=groupsClaim" }),
        __metadata("design:type", String)
    ], OidcIdentityProviderConfig.prototype, "groupsClaim", void 0);
    __decorate([
        Metadata({ data: "json, name=groupsPrefix" }),
        __metadata("design:type", String)
    ], OidcIdentityProviderConfig.prototype, "groupsPrefix", void 0);
    __decorate([
        Metadata({ data: "json, name=identityProviderConfigArn" }),
        __metadata("design:type", String)
    ], OidcIdentityProviderConfig.prototype, "identityProviderConfigArn", void 0);
    __decorate([
        Metadata({ data: "json, name=identityProviderConfigName" }),
        __metadata("design:type", String)
    ], OidcIdentityProviderConfig.prototype, "identityProviderConfigName", void 0);
    __decorate([
        Metadata({ data: "json, name=issuerUrl" }),
        __metadata("design:type", String)
    ], OidcIdentityProviderConfig.prototype, "issuerUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=requiredClaims" }),
        __metadata("design:type", Map)
    ], OidcIdentityProviderConfig.prototype, "requiredClaims", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OidcIdentityProviderConfig.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], OidcIdentityProviderConfig.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=usernameClaim" }),
        __metadata("design:type", String)
    ], OidcIdentityProviderConfig.prototype, "usernameClaim", void 0);
    __decorate([
        Metadata({ data: "json, name=usernamePrefix" }),
        __metadata("design:type", String)
    ], OidcIdentityProviderConfig.prototype, "usernamePrefix", void 0);
    return OidcIdentityProviderConfig;
}(SpeakeasyBase));
export { OidcIdentityProviderConfig };
