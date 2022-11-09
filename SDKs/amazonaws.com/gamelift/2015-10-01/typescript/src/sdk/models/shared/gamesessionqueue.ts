import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameSessionQueueDestination } from "./gamesessionqueuedestination";
import { FilterConfiguration } from "./filterconfiguration";
import { PlayerLatencyPolicy } from "./playerlatencypolicy";
import { PriorityConfiguration } from "./priorityconfiguration";


// GameSessionQueue
/** 
 * <p>Configuration for a game session placement mechanism that processes requests for new game sessions. A queue can be used on its own or as part of a matchmaking solution.</p> <p> <b>Related actions</b> </p> <p> <a>CreateGameSessionQueue</a> | <a>DescribeGameSessionQueues</a> | <a>UpdateGameSessionQueue</a> </p>
**/
export class GameSessionQueue extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomEventData" })
  customEventData?: string;

  @Metadata({ data: "json, name=Destinations", elemType: shared.GameSessionQueueDestination })
  destinations?: GameSessionQueueDestination[];

  @Metadata({ data: "json, name=FilterConfiguration" })
  filterConfiguration?: FilterConfiguration;

  @Metadata({ data: "json, name=GameSessionQueueArn" })
  gameSessionQueueArn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NotificationTarget" })
  notificationTarget?: string;

  @Metadata({ data: "json, name=PlayerLatencyPolicies", elemType: shared.PlayerLatencyPolicy })
  playerLatencyPolicies?: PlayerLatencyPolicy[];

  @Metadata({ data: "json, name=PriorityConfiguration" })
  priorityConfiguration?: PriorityConfiguration;

  @Metadata({ data: "json, name=TimeoutInSeconds" })
  timeoutInSeconds?: number;
}
