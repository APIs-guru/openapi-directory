import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackfillModeEnum } from "./backfillmodeenum";
import { FlexMatchModeEnum } from "./flexmatchmodeenum";
import { GameProperty } from "./gameproperty";



// MatchmakingConfiguration
/** 
 * Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration.
**/
export class MatchmakingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptanceRequired" })
  acceptanceRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AcceptanceTimeoutSeconds" })
  acceptanceTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=AdditionalPlayerCount" })
  additionalPlayerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=BackfillMode" })
  backfillMode?: BackfillModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationArn" })
  configurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CustomEventData" })
  customEventData?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FlexMatchMode" })
  flexMatchMode?: FlexMatchModeEnum;

  @SpeakeasyMetadata({ data: "json, name=GameProperties", elemType: GameProperty })
  gameProperties?: GameProperty[];

  @SpeakeasyMetadata({ data: "json, name=GameSessionData" })
  gameSessionData?: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionQueueArns" })
  gameSessionQueueArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationTarget" })
  notificationTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestTimeoutSeconds" })
  requestTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=RuleSetArn" })
  ruleSetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleSetName" })
  ruleSetName?: string;
}
