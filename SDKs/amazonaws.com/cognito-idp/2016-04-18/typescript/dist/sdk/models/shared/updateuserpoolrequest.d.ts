import { SpeakeasyBase } from "../../../internal/utils";
import { AccountRecoverySettingType } from "./accountrecoverysettingtype";
import { AdminCreateUserConfigType } from "./admincreateuserconfigtype";
import { VerifiedAttributeTypeEnum } from "./verifiedattributetypeenum";
import { DeviceConfigurationType } from "./deviceconfigurationtype";
import { EmailConfigurationType } from "./emailconfigurationtype";
import { LambdaConfigType } from "./lambdaconfigtype";
import { UserPoolMfaTypeEnum } from "./userpoolmfatypeenum";
import { UserPoolPolicyType } from "./userpoolpolicytype";
import { SmsConfigurationType } from "./smsconfigurationtype";
import { UserPoolAddOnsType } from "./userpooladdonstype";
import { VerificationMessageTemplateType } from "./verificationmessagetemplatetype";
/**
 * Represents the request to update the user pool.
**/
export declare class UpdateUserPoolRequest extends SpeakeasyBase {
    accountRecoverySetting?: AccountRecoverySettingType;
    adminCreateUserConfig?: AdminCreateUserConfigType;
    autoVerifiedAttributes?: VerifiedAttributeTypeEnum[];
    deviceConfiguration?: DeviceConfigurationType;
    emailConfiguration?: EmailConfigurationType;
    emailVerificationMessage?: string;
    emailVerificationSubject?: string;
    lambdaConfig?: LambdaConfigType;
    mfaConfiguration?: UserPoolMfaTypeEnum;
    policies?: UserPoolPolicyType;
    smsAuthenticationMessage?: string;
    smsConfiguration?: SmsConfigurationType;
    smsVerificationMessage?: string;
    userPoolAddOns?: UserPoolAddOnsType;
    userPoolId: string;
    userPoolTags?: Map<string, string>;
    verificationMessageTemplate?: VerificationMessageTemplateType;
}
