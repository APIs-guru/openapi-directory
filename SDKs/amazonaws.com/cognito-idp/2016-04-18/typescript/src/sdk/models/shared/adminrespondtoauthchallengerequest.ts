import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";
import { ContextDataType } from "./contextdatatype";



// AdminRespondToAuthChallengeRequest
/** 
 * The request to respond to the authentication challenge, as an administrator.
**/
export class AdminRespondToAuthChallengeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnalyticsMetadata" })
  analyticsMetadata?: AnalyticsMetadataType;

  @SpeakeasyMetadata({ data: "json, name=ChallengeName" })
  challengeName: ChallengeNameTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ChallengeResponses" })
  challengeResponses?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ContextData" })
  contextData?: ContextDataType;

  @SpeakeasyMetadata({ data: "json, name=Session" })
  session?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
