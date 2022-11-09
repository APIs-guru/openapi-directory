import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameSessionQueueDestination } from "./gamesessionqueuedestination";
import { FilterConfiguration } from "./filterconfiguration";
import { PlayerLatencyPolicy } from "./playerlatencypolicy";
import { PriorityConfiguration } from "./priorityconfiguration";
import { Tag } from "./tag";


// CreateGameSessionQueueInput
/** 
 * Represents the input for a request operation.
**/
export class CreateGameSessionQueueInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomEventData" })
  customEventData?: string;

  @Metadata({ data: "json, name=Destinations", elemType: shared.GameSessionQueueDestination })
  destinations?: GameSessionQueueDestination[];

  @Metadata({ data: "json, name=FilterConfiguration" })
  filterConfiguration?: FilterConfiguration;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NotificationTarget" })
  notificationTarget?: string;

  @Metadata({ data: "json, name=PlayerLatencyPolicies", elemType: shared.PlayerLatencyPolicy })
  playerLatencyPolicies?: PlayerLatencyPolicy[];

  @Metadata({ data: "json, name=PriorityConfiguration" })
  priorityConfiguration?: PriorityConfiguration;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TimeoutInSeconds" })
  timeoutInSeconds?: number;
}
