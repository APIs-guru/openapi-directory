import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CognitoUserPoolConfig
/** 
 * Describes an Amazon Cognito user pool configuration.
**/
export class CognitoUserPoolConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=appIdClientRegex" })
  appIdClientRegex?: string;

  @Metadata({ data: "json, name=awsRegion" })
  awsRegion: string;

  @Metadata({ data: "json, name=userPoolId" })
  userPoolId: string;
}
