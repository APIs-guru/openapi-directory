import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AccountRecoverySetting" })
  accountRecoverySetting?: AccountRecoverySettingType;

  @Metadata({ data: "json, name=AdminCreateUserConfig" })
  adminCreateUserConfig?: AdminCreateUserConfigType;

  @Metadata({ data: "json, name=AliasAttributes" })
  aliasAttributes?: AliasAttributeTypeEnum[];

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=AutoVerifiedAttributes" })
  autoVerifiedAttributes?: VerifiedAttributeTypeEnum[];

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=CustomDomain" })
  customDomain?: string;

  @Metadata({ data: "json, name=DeviceConfiguration" })
  deviceConfiguration?: DeviceConfigurationType;

  @Metadata({ data: "json, name=Domain" })
  domain?: string;

  @Metadata({ data: "json, name=EmailConfiguration" })
  emailConfiguration?: EmailConfigurationType;

  @Metadata({ data: "json, name=EmailConfigurationFailure" })
  emailConfigurationFailure?: string;

  @Metadata({ data: "json, name=EmailVerificationMessage" })
  emailVerificationMessage?: string;

  @Metadata({ data: "json, name=EmailVerificationSubject" })
  emailVerificationSubject?: string;

  @Metadata({ data: "json, name=EstimatedNumberOfUsers" })
  estimatedNumberOfUsers?: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=LambdaConfig" })
  lambdaConfig?: LambdaConfigType;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=MfaConfiguration" })
  mfaConfiguration?: UserPoolMfaTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Policies" })
  policies?: UserPoolPolicyType;

  @Metadata({ data: "json, name=SchemaAttributes", elemType: shared.SchemaAttributeType })
  schemaAttributes?: SchemaAttributeType[];

  @Metadata({ data: "json, name=SmsAuthenticationMessage" })
  smsAuthenticationMessage?: string;

  @Metadata({ data: "json, name=SmsConfiguration" })
  smsConfiguration?: SmsConfigurationType;

  @Metadata({ data: "json, name=SmsConfigurationFailure" })
  smsConfigurationFailure?: string;

  @Metadata({ data: "json, name=SmsVerificationMessage" })
  smsVerificationMessage?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusTypeEnum;

  @Metadata({ data: "json, name=UserPoolAddOns" })
  userPoolAddOns?: UserPoolAddOnsType;

  @Metadata({ data: "json, name=UserPoolTags" })
  userPoolTags?: Map<string, string>;

  @Metadata({ data: "json, name=UsernameAttributes" })
  usernameAttributes?: UsernameAttributeTypeEnum[];

  @Metadata({ data: "json, name=UsernameConfiguration" })
  usernameConfiguration?: UsernameConfigurationType;

  @Metadata({ data: "json, name=VerificationMessageTemplate" })
  verificationMessageTemplate?: VerificationMessageTemplateType;
}
