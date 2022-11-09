import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefaultActionEnum } from "./defaultactionenum";


// UserPoolConfig
/** 
 * Describes an Amazon Cognito user pool configuration.
**/
export class UserPoolConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=appIdClientRegex" })
  appIdClientRegex?: string;

  @Metadata({ data: "json, name=awsRegion" })
  awsRegion: string;

  @Metadata({ data: "json, name=defaultAction" })
  defaultAction: DefaultActionEnum;

  @Metadata({ data: "json, name=userPoolId" })
  userPoolId: string;
}
