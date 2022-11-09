import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackfillModeEnum } from "./backfillmodeenum";
import { FlexMatchModeEnum } from "./flexmatchmodeenum";
import { GameProperty } from "./gameproperty";


// MatchmakingConfiguration
/** 
 * Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration.
**/
export class MatchmakingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptanceRequired" })
  acceptanceRequired?: boolean;

  @Metadata({ data: "json, name=AcceptanceTimeoutSeconds" })
  acceptanceTimeoutSeconds?: number;

  @Metadata({ data: "json, name=AdditionalPlayerCount" })
  additionalPlayerCount?: number;

  @Metadata({ data: "json, name=BackfillMode" })
  backfillMode?: BackfillModeEnum;

  @Metadata({ data: "json, name=ConfigurationArn" })
  configurationArn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=CustomEventData" })
  customEventData?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FlexMatchMode" })
  flexMatchMode?: FlexMatchModeEnum;

  @Metadata({ data: "json, name=GameProperties", elemType: shared.GameProperty })
  gameProperties?: GameProperty[];

  @Metadata({ data: "json, name=GameSessionData" })
  gameSessionData?: string;

  @Metadata({ data: "json, name=GameSessionQueueArns" })
  gameSessionQueueArns?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NotificationTarget" })
  notificationTarget?: string;

  @Metadata({ data: "json, name=RequestTimeoutSeconds" })
  requestTimeoutSeconds?: number;

  @Metadata({ data: "json, name=RuleSetArn" })
  ruleSetArn?: string;

  @Metadata({ data: "json, name=RuleSetName" })
  ruleSetName?: string;
}
