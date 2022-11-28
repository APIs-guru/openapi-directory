import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackfillModeEnum } from "./backfillmodeenum";
import { FlexMatchModeEnum } from "./flexmatchmodeenum";
import { GameProperty } from "./gameproperty";



// UpdateMatchmakingConfigurationInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateMatchmakingConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptanceRequired" })
  acceptanceRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AcceptanceTimeoutSeconds" })
  acceptanceTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=AdditionalPlayerCount" })
  additionalPlayerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=BackfillMode" })
  backfillMode?: BackfillModeEnum;

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
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationTarget" })
  notificationTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestTimeoutSeconds" })
  requestTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=RuleSetName" })
  ruleSetName?: string;
}
