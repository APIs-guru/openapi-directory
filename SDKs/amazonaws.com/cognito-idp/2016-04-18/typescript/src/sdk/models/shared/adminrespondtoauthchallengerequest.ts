import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";
import { ContextDataType } from "./contextdatatype";


// AdminRespondToAuthChallengeRequest
/** 
 * The request to respond to the authentication challenge, as an administrator.
**/
export class AdminRespondToAuthChallengeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnalyticsMetadata" })
  analyticsMetadata?: AnalyticsMetadataType;

  @Metadata({ data: "json, name=ChallengeName" })
  challengeName: ChallengeNameTypeEnum;

  @Metadata({ data: "json, name=ChallengeResponses" })
  challengeResponses?: Map<string, string>;

  @Metadata({ data: "json, name=ClientId" })
  clientId: string;

  @Metadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @Metadata({ data: "json, name=ContextData" })
  contextData?: ContextDataType;

  @Metadata({ data: "json, name=Session" })
  session?: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
