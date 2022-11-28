import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSessionQueueDestination } from "./gamesessionqueuedestination";
import { FilterConfiguration } from "./filterconfiguration";
import { PlayerLatencyPolicy } from "./playerlatencypolicy";
import { PriorityConfiguration } from "./priorityconfiguration";



// UpdateGameSessionQueueInput
/** 
 * Represents the input for a request operation.
**/
export class UpdateGameSessionQueueInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomEventData" })
  customEventData?: string;

  @SpeakeasyMetadata({ data: "json, name=Destinations", elemType: GameSessionQueueDestination })
  destinations?: GameSessionQueueDestination[];

  @SpeakeasyMetadata({ data: "json, name=FilterConfiguration" })
  filterConfiguration?: FilterConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationTarget" })
  notificationTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerLatencyPolicies", elemType: PlayerLatencyPolicy })
  playerLatencyPolicies?: PlayerLatencyPolicy[];

  @SpeakeasyMetadata({ data: "json, name=PriorityConfiguration" })
  priorityConfiguration?: PriorityConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TimeoutInSeconds" })
  timeoutInSeconds?: number;
}
