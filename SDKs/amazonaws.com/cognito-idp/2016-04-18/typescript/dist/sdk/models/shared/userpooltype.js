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
import { SchemaAttributeType } from "./schemaattributetype";
import { SmsConfigurationType } from "./smsconfigurationtype";
import { StatusTypeEnum } from "./statustypeenum";
import { UserPoolAddOnsType } from "./userpooladdonstype";
import { UsernameConfigurationType } from "./usernameconfigurationtype";
import { VerificationMessageTemplateType } from "./verificationmessagetemplatetype";
// UserPoolType
/**
 * A container for information about the user pool.
**/
var UserPoolType = /** @class */ (function (_super) {
    __extends(UserPoolType, _super);
    function UserPoolType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountRecoverySetting" }),
        __metadata("design:type", AccountRecoverySettingType)
    ], UserPoolType.prototype, "accountRecoverySetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdminCreateUserConfig" }),
        __metadata("design:type", AdminCreateUserConfigType)
    ], UserPoolType.prototype, "adminCreateUserConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AliasAttributes" }),
        __metadata("design:type", Array)
    ], UserPoolType.prototype, "aliasAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoVerifiedAttributes" }),
        __metadata("design:type", Array)
    ], UserPoolType.prototype, "autoVerifiedAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], UserPoolType.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomDomain" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "customDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceConfiguration" }),
        __metadata("design:type", DeviceConfigurationType)
    ], UserPoolType.prototype, "deviceConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Domain" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailConfiguration" }),
        __metadata("design:type", EmailConfigurationType)
    ], UserPoolType.prototype, "emailConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailConfigurationFailure" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "emailConfigurationFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailVerificationMessage" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "emailVerificationMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailVerificationSubject" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "emailVerificationSubject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EstimatedNumberOfUsers" }),
        __metadata("design:type", Number)
    ], UserPoolType.prototype, "estimatedNumberOfUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LambdaConfig" }),
        __metadata("design:type", LambdaConfigType)
    ], UserPoolType.prototype, "lambdaConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", Date)
    ], UserPoolType.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MfaConfiguration" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "mfaConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Policies" }),
        __metadata("design:type", UserPoolPolicyType)
    ], UserPoolType.prototype, "policies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaAttributes", elemType: SchemaAttributeType }),
        __metadata("design:type", Array)
    ], UserPoolType.prototype, "schemaAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SmsAuthenticationMessage" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "smsAuthenticationMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SmsConfiguration" }),
        __metadata("design:type", SmsConfigurationType)
    ], UserPoolType.prototype, "smsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SmsConfigurationFailure" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "smsConfigurationFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SmsVerificationMessage" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "smsVerificationMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], UserPoolType.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserPoolAddOns" }),
        __metadata("design:type", UserPoolAddOnsType)
    ], UserPoolType.prototype, "userPoolAddOns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserPoolTags" }),
        __metadata("design:type", Map)
    ], UserPoolType.prototype, "userPoolTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UsernameAttributes" }),
        __metadata("design:type", Array)
    ], UserPoolType.prototype, "usernameAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UsernameConfiguration" }),
        __metadata("design:type", UsernameConfigurationType)
    ], UserPoolType.prototype, "usernameConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerificationMessageTemplate" }),
        __metadata("design:type", VerificationMessageTemplateType)
    ], UserPoolType.prototype, "verificationMessageTemplate", void 0);
    return UserPoolType;
}(SpeakeasyBase));
export { UserPoolType };
