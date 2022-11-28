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
import { AuthenticateOidcActionConditionalBehaviorEnumEnum } from "./authenticateoidcactionconditionalbehaviorenumenum";
// AuthenticateOidcActionConfig
/**
 * Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
**/
var AuthenticateOidcActionConfig = /** @class */ (function (_super) {
    __extends(AuthenticateOidcActionConfig, _super);
    function AuthenticateOidcActionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AuthenticateOidcActionConfig.prototype, "authenticationRequestExtraParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateOidcActionConfig.prototype, "authorizationEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateOidcActionConfig.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateOidcActionConfig.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateOidcActionConfig.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateOidcActionConfig.prototype, "onUnauthenticatedRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateOidcActionConfig.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateOidcActionConfig.prototype, "sessionCookieName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AuthenticateOidcActionConfig.prototype, "sessionTimeout", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateOidcActionConfig.prototype, "tokenEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], AuthenticateOidcActionConfig.prototype, "useExistingClientSecret", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AuthenticateOidcActionConfig.prototype, "userInfoEndpoint", void 0);
    return AuthenticateOidcActionConfig;
}(SpeakeasyBase));
export { AuthenticateOidcActionConfig };
