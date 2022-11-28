import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AccountRecoverySetting" })
  accountRecoverySetting?: AccountRecoverySettingType;

  @SpeakeasyMetadata({ data: "json, name=AdminCreateUserConfig" })
  adminCreateUserConfig?: AdminCreateUserConfigType;

  @SpeakeasyMetadata({ data: "json, name=AutoVerifiedAttributes" })
  autoVerifiedAttributes?: VerifiedAttributeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=DeviceConfiguration" })
  deviceConfiguration?: DeviceConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=EmailConfiguration" })
  emailConfiguration?: EmailConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=EmailVerificationMessage" })
  emailVerificationMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailVerificationSubject" })
  emailVerificationSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=LambdaConfig" })
  lambdaConfig?: LambdaConfigType;

  @SpeakeasyMetadata({ data: "json, name=MfaConfiguration" })
  mfaConfiguration?: UserPoolMfaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Policies" })
  policies?: UserPoolPolicyType;

  @SpeakeasyMetadata({ data: "json, name=SmsAuthenticationMessage" })
  smsAuthenticationMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=SmsConfiguration" })
  smsConfiguration?: SmsConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=SmsVerificationMessage" })
  smsVerificationMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolAddOns" })
  userPoolAddOns?: UserPoolAddOnsType;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolTags" })
  userPoolTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=VerificationMessageTemplate" })
  verificationMessageTemplate?: VerificationMessageTemplateType;
}
