import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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


// UpdateUserPoolRequest
/** 
 * Represents the request to update the user pool.
**/
export class UpdateUserPoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountRecoverySetting" })
  accountRecoverySetting?: AccountRecoverySettingType;

  @Metadata({ data: "json, name=AdminCreateUserConfig" })
  adminCreateUserConfig?: AdminCreateUserConfigType;

  @Metadata({ data: "json, name=AutoVerifiedAttributes" })
  autoVerifiedAttributes?: VerifiedAttributeTypeEnum[];

  @Metadata({ data: "json, name=DeviceConfiguration" })
  deviceConfiguration?: DeviceConfigurationType;

  @Metadata({ data: "json, name=EmailConfiguration" })
  emailConfiguration?: EmailConfigurationType;

  @Metadata({ data: "json, name=EmailVerificationMessage" })
  emailVerificationMessage?: string;

  @Metadata({ data: "json, name=EmailVerificationSubject" })
  emailVerificationSubject?: string;

  @Metadata({ data: "json, name=LambdaConfig" })
  lambdaConfig?: LambdaConfigType;

  @Metadata({ data: "json, name=MfaConfiguration" })
  mfaConfiguration?: UserPoolMfaTypeEnum;

  @Metadata({ data: "json, name=Policies" })
  policies?: UserPoolPolicyType;

  @Metadata({ data: "json, name=SmsAuthenticationMessage" })
  smsAuthenticationMessage?: string;

  @Metadata({ data: "json, name=SmsConfiguration" })
  smsConfiguration?: SmsConfigurationType;

  @Metadata({ data: "json, name=SmsVerificationMessage" })
  smsVerificationMessage?: string;

  @Metadata({ data: "json, name=UserPoolAddOns" })
  userPoolAddOns?: UserPoolAddOnsType;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=UserPoolTags" })
  userPoolTags?: Map<string, string>;

  @Metadata({ data: "json, name=VerificationMessageTemplate" })
  verificationMessageTemplate?: VerificationMessageTemplateType;
}
