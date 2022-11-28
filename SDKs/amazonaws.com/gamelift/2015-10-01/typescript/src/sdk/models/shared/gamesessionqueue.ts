import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSessionQueueDestination } from "./gamesessionqueuedestination";
import { FilterConfiguration } from "./filterconfiguration";
import { PlayerLatencyPolicy } from "./playerlatencypolicy";
import { PriorityConfiguration } from "./priorityconfiguration";



// GameSessionQueue
/** 
 * <p>Configuration for a game session placement mechanism that processes requests for new game sessions. A queue can be used on its own or as part of a matchmaking solution.</p> <p> <b>Related actions</b> </p> <p> <a>CreateGameSessionQueue</a> | <a>DescribeGameSessionQueues</a> | <a>UpdateGameSessionQueue</a> </p>
**/
export class GameSessionQueue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomEventData" })
  customEventData?: string;

  @SpeakeasyMetadata({ data: "json, name=Destinations", elemType: GameSessionQueueDestination })
  destinations?: GameSessionQueueDestination[];

  @SpeakeasyMetadata({ data: "json, name=FilterConfiguration" })
  filterConfiguration?: FilterConfiguration;

  @SpeakeasyMetadata({ data: "json, name=GameSessionQueueArn" })
  gameSessionQueueArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationTarget" })
  notificationTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerLatencyPolicies", elemType: PlayerLatencyPolicy })
  playerLatencyPolicies?: PlayerLatencyPolicy[];

  @SpeakeasyMetadata({ data: "json, name=PriorityConfiguration" })
  priorityConfiguration?: PriorityConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TimeoutInSeconds" })
  timeoutInSeconds?: number;
}
