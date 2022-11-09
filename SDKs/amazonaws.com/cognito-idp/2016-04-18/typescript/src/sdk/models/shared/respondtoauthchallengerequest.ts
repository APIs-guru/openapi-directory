import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalyticsMetadataType } from "./analyticsmetadatatype";
import { ChallengeNameTypeEnum } from "./challengenametypeenum";
import { UserContextDataType } from "./usercontextdatatype";


// RespondToAuthChallengeRequest
/** 
 * The request to respond to an authentication challenge.
**/
export class RespondToAuthChallengeRequest extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=Session" })
  session?: string;

  @Metadata({ data: "json, name=UserContextData" })
  userContextData?: UserContextDataType;
}
