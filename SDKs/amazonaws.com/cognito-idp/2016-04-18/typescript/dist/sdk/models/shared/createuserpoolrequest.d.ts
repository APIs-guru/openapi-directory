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
import { UserPoolAddOnsType } from "./userpooladdonstype";
import { UsernameAttributeTypeEnum } from "./usernameattributetypeenum";
import { UsernameConfigurationType } from "./usernameconfigurationtype";
import { VerificationMessageTemplateType } from "./verificationmessagetemplatetype";
/**
 * Represents the request to create a user pool.
**/
export declare class CreateUserPoolRequest extends SpeakeasyBase {
    accountRecoverySetting?: AccountRecoverySettingType;
    adminCreateUserConfig?: AdminCreateUserConfigType;
    aliasAttributes?: AliasAttributeTypeEnum[];
    autoVerifiedAttributes?: VerifiedAttributeTypeEnum[];
    deviceConfiguration?: DeviceConfigurationType;
    emailConfiguration?: EmailConfigurationType;
    emailVerificationMessage?: string;
    emailVerificationSubject?: string;
    lambdaConfig?: LambdaConfigType;
    mfaConfiguration?: UserPoolMfaTypeEnum;
    policies?: UserPoolPolicyType;
    poolName: string;
    schema?: SchemaAttributeType[];
    smsAuthenticationMessage?: string;
    smsConfiguration?: SmsConfigurationType;
    smsVerificationMessage?: string;
    userPoolAddOns?: UserPoolAddOnsType;
    userPoolTags?: Map<string, string>;
    usernameAttributes?: UsernameAttributeTypeEnum[];
    usernameConfiguration?: UsernameConfigurationType;
    verificationMessageTemplate?: VerificationMessageTemplateType;
}
