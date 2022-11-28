import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultActionEnum } from "./defaultactionenum";



// UserPoolConfig
/** 
 * Describes an Amazon Cognito user pool configuration.
**/
export class UserPoolConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appIdClientRegex" })
  appIdClientRegex?: string;

  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion: string;

  @SpeakeasyMetadata({ data: "json, name=defaultAction" })
  defaultAction: DefaultActionEnum;

  @SpeakeasyMetadata({ data: "json, name=userPoolId" })
  userPoolId: string;
}
