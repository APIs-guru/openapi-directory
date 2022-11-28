import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// UserPoolType
/** 
 * A container for information about the user pool.
**/
export class UserPoolType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountRecoverySetting" })
  accountRecoverySetting?: AccountRecoverySettingType;

  @SpeakeasyMetadata({ data: "json, name=AdminCreateUserConfig" })
  adminCreateUserConfig?: AdminCreateUserConfigType;

  @SpeakeasyMetadata({ data: "json, name=AliasAttributes" })
  aliasAttributes?: AliasAttributeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoVerifiedAttributes" })
  autoVerifiedAttributes?: VerifiedAttributeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=CustomDomain" })
  customDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceConfiguration" })
  deviceConfiguration?: DeviceConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailConfiguration" })
  emailConfiguration?: EmailConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=EmailConfigurationFailure" })
  emailConfigurationFailure?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailVerificationMessage" })
  emailVerificationMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailVerificationSubject" })
  emailVerificationSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=EstimatedNumberOfUsers" })
  estimatedNumberOfUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LambdaConfig" })
  lambdaConfig?: LambdaConfigType;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MfaConfiguration" })
  mfaConfiguration?: UserPoolMfaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Policies" })
  policies?: UserPoolPolicyType;

  @SpeakeasyMetadata({ data: "json, name=SchemaAttributes", elemType: SchemaAttributeType })
  schemaAttributes?: SchemaAttributeType[];

  @SpeakeasyMetadata({ data: "json, name=SmsAuthenticationMessage" })
  smsAuthenticationMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=SmsConfiguration" })
  smsConfiguration?: SmsConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=SmsConfigurationFailure" })
  smsConfigurationFailure?: string;

  @SpeakeasyMetadata({ data: "json, name=SmsVerificationMessage" })
  smsVerificationMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UserPoolAddOns" })
  userPoolAddOns?: UserPoolAddOnsType;

  @SpeakeasyMetadata({ data: "json, name=UserPoolTags" })
  userPoolTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UsernameAttributes" })
  usernameAttributes?: UsernameAttributeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=UsernameConfiguration" })
  usernameConfiguration?: UsernameConfigurationType;

  @SpeakeasyMetadata({ data: "json, name=VerificationMessageTemplate" })
  verificationMessageTemplate?: VerificationMessageTemplateType;
}
