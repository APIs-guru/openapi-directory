import { SpeakeasyBase } from "../../../internal/utils";
import { AccountRecoverySettingType } from "./accountrecoverysettingtype";
import { AdminCreateUserConfigType } from "./admincreateuserconfigtype";
import { AliasAttributeTypeEnum } from "./aliasattributetypeenum";
import { VerifiedAttributeTypeEnum } from "./verifiedattributetypeenum";
import { DeviceConfigurationType } from "./deviceconfigurationtype";
import { EmailConfigurationType } from "./emailconfigurationtype";
import { LambdaConfigType } from "./lambdaconfigtype";
import { UserPoolMfaTypeEnum } from "./userpoolmfatypeenum";
import { UserPoolPolicyType } from "./userpoolpolicytype";
import { SchemaAttributeType } from "./schemaattributetype";
import { SmsConfigurationType } from "./smsconfigurationtype";
import { StatusTypeEnum } from "./statustypeenum";
import { UserPoolAddOnsType } from "./userpooladdonstype";
import { UsernameAttributeTypeEnum } from "./usernameattributetypeenum";
import { UsernameConfigurationType } from "./usernameconfigurationtype";
import { VerificationMessageTemplateType } from "./verificationmessagetemplatetype";
/**
 * A container for information about the user pool.
**/
export declare class UserPoolType extends SpeakeasyBase {
    accountRecoverySetting?: AccountRecoverySettingType;
    adminCreateUserConfig?: AdminCreateUserConfigType;
    aliasAttributes?: AliasAttributeTypeEnum[];
    arn?: string;
    autoVerifiedAttributes?: VerifiedAttributeTypeEnum[];
    creationDate?: Date;
    customDomain?: string;
    deviceConfiguration?: DeviceConfigurationType;
    domain?: string;
    emailConfiguration?: EmailConfigurationType;
    emailConfigurationFailure?: string;
    emailVerificationMessage?: string;
    emailVerificationSubject?: string;
    estimatedNumberOfUsers?: number;
    id?: string;
    lambdaConfig?: LambdaConfigType;
    lastModifiedDate?: Date;
    mfaConfiguration?: UserPoolMfaTypeEnum;
    name?: string;
    policies?: UserPoolPolicyType;
    schemaAttributes?: SchemaAttributeType[];
    smsAuthenticationMessage?: string;
    smsConfiguration?: SmsConfigurationType;
    smsConfigurationFailure?: string;
    smsVerificationMessage?: string;
    status?: StatusTypeEnum;
    userPoolAddOns?: UserPoolAddOnsType;
    userPoolTags?: Map<string, string>;
    usernameAttributes?: UsernameAttributeTypeEnum[];
    usernameConfiguration?: UsernameConfigurationType;
    verificationMessageTemplate?: VerificationMessageTemplateType;
}
