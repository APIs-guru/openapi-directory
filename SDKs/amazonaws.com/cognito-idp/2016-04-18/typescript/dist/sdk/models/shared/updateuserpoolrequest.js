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
import { AccountRecoverySettingType } from "./accountrecoverysettingtype";
import { AdminCreateUserConfigType } from "./admincreateuserconfigtype";
import { DeviceConfigurationType } from "./deviceconfigurationtype";
import { EmailConfigurationType } from "./emailconfigurationtype";
import { LambdaConfigType } from "./lambdaconfigtype";
import { UserPoolMfaTypeEnum } from "./userpoolmfatypeenum";
import { UserPoolPolicyType } from "./userpoolpolicytype";
import { SmsConfigurationType } from "./smsconfigurationtype";
import { UserPoolAddOnsType } from "./userpooladdonstype";
import { VerificationMessageTemplateType } from "./verificationmessagetemplatetype";
// UpdateUserPoolRequest
/**
 * Represents the request to update the user pool.
**/
var UpdateUserPoolRequest = /** @class */ (function (_super) {
    __extends(UpdateUserPoolRequest, _super);
    function UpdateUserPoolRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountRecoverySetting" }),
        __metadata("design:type", AccountRecoverySettingType)
    ], UpdateUserPoolRequest.prototype, "accountRecoverySetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdminCreateUserConfig" }),
        __metadata("design:type", AdminCreateUserConfigType)
    ], UpdateUserPoolRequest.prototype, "adminCreateUserConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoVerifiedAttributes" }),
        __metadata("design:type", Array)
    ], UpdateUserPoolRequest.prototype, "autoVerifiedAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceConfiguration" }),
        __metadata("design:type", DeviceConfigurationType)
    ], UpdateUserPoolRequest.prototype, "deviceConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailConfiguration" }),
        __metadata("design:type", EmailConfigurationType)
    ], UpdateUserPoolRequest.prototype, "emailConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailVerificationMessage" }),
        __metadata("design:type", String)
    ], UpdateUserPoolRequest.prototype, "emailVerificationMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailVerificationSubject" }),
        __metadata("design:type", String)
    ], UpdateUserPoolRequest.prototype, "emailVerificationSubject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LambdaConfig" }),
        __metadata("design:type", LambdaConfigType)
    ], UpdateUserPoolRequest.prototype, "lambdaConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MfaConfiguration" }),
        __metadata("design:type", String)
    ], UpdateUserPoolRequest.prototype, "mfaConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Policies" }),
        __metadata("design:type", UserPoolPolicyType)
    ], UpdateUserPoolRequest.prototype, "policies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SmsAuthenticationMessage" }),
        __metadata("design:type", String)
    ], UpdateUserPoolRequest.prototype, "smsAuthenticationMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SmsConfiguration" }),
        __metadata("design:type", SmsConfigurationType)
    ], UpdateUserPoolRequest.prototype, "smsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SmsVerificationMessage" }),
        __metadata("design:type", String)
    ], UpdateUserPoolRequest.prototype, "smsVerificationMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserPoolAddOns" }),
        __metadata("design:type", UserPoolAddOnsType)
    ], UpdateUserPoolRequest.prototype, "userPoolAddOns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserPoolId" }),
        __metadata("design:type", String)
    ], UpdateUserPoolRequest.prototype, "userPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserPoolTags" }),
        __metadata("design:type", Map)
    ], UpdateUserPoolRequest.prototype, "userPoolTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerificationMessageTemplate" }),
        __metadata("design:type", VerificationMessageTemplateType)
    ], UpdateUserPoolRequest.prototype, "verificationMessageTemplate", void 0);
    return UpdateUserPoolRequest;
}(SpeakeasyBase));
export { UpdateUserPoolRequest };
