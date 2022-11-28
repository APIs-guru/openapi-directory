import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CognitoUserPoolConfig
/** 
 * Describes an Amazon Cognito user pool configuration.
**/
export class CognitoUserPoolConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appIdClientRegex" })
  appIdClientRegex?: string;

  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion: string;

  @SpeakeasyMetadata({ data: "json, name=userPoolId" })
  userPoolId: string;
}
