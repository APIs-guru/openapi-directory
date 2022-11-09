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
import { UserPoolAddOnsType } from "./userpooladdonstype";
import { UsernameAttributeTypeEnum } from "./usernameattributetypeenum";
import { UsernameConfigurationType } from "./usernameconfigurationtype";
import { VerificationMessageTemplateType } from "./verificationmessagetemplatetype";


// CreateUserPoolRequest
/** 
 * Represents the request to create a user pool.
**/
export class CreateUserPoolRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountRecoverySetting" })
  accountRecoverySetting?: AccountRecoverySettingType;

  @Metadata({ data: "json, name=AdminCreateUserConfig" })
  adminCreateUserConfig?: AdminCreateUserConfigType;

  @Metadata({ data: "json, name=AliasAttributes" })
  aliasAttributes?: AliasAttributeTypeEnum[];

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

  @Metadata({ data: "json, name=PoolName" })
  poolName: string;

  @Metadata({ data: "json, name=Schema", elemType: shared.SchemaAttributeType })
  schema?: SchemaAttributeType[];

  @Metadata({ data: "json, name=SmsAuthenticationMessage" })
  smsAuthenticationMessage?: string;

  @Metadata({ data: "json, name=SmsConfiguration" })
  smsConfiguration?: SmsConfigurationType;

  @Metadata({ data: "json, name=SmsVerificationMessage" })
  smsVerificationMessage?: string;

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
