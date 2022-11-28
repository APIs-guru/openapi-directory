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
import { CreateBackendAuthForgotPasswordConfig } from "./createbackendauthforgotpasswordconfig";
import { CreateBackendAuthMfaConfig } from "./createbackendauthmfaconfig";
import { CreateBackendAuthOAuthConfig } from "./createbackendauthoauthconfig";
import { CreateBackendAuthPasswordPolicyConfig } from "./createbackendauthpasswordpolicyconfig";
import { SignInMethodEnum } from "./signinmethodenum";
// CreateBackendAuthUserPoolConfig
/**
 * Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.
**/
var CreateBackendAuthUserPoolConfig = /** @class */ (function (_super) {
    __extends(CreateBackendAuthUserPoolConfig, _super);
    function CreateBackendAuthUserPoolConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForgotPassword" }),
        __metadata("design:type", CreateBackendAuthForgotPasswordConfig)
    ], CreateBackendAuthUserPoolConfig.prototype, "forgotPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mfa" }),
        __metadata("design:type", CreateBackendAuthMfaConfig)
    ], CreateBackendAuthUserPoolConfig.prototype, "mfa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OAuth" }),
        __metadata("design:type", CreateBackendAuthOAuthConfig)
    ], CreateBackendAuthUserPoolConfig.prototype, "oAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PasswordPolicy" }),
        __metadata("design:type", CreateBackendAuthPasswordPolicyConfig)
    ], CreateBackendAuthUserPoolConfig.prototype, "passwordPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequiredSignUpAttributes" }),
        __metadata("design:type", Array)
    ], CreateBackendAuthUserPoolConfig.prototype, "requiredSignUpAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SignInMethod" }),
        __metadata("design:type", String)
    ], CreateBackendAuthUserPoolConfig.prototype, "signInMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserPoolName" }),
        __metadata("design:type", String)
    ], CreateBackendAuthUserPoolConfig.prototype, "userPoolName", void 0);
    return CreateBackendAuthUserPoolConfig;
}(SpeakeasyBase));
export { CreateBackendAuthUserPoolConfig };
