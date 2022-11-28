import { SpeakeasyBase } from "../../../internal/utils";
import { GameSessionQueueDestination } from "./gamesessionqueuedestination";
import { FilterConfiguration } from "./filterconfiguration";
import { PlayerLatencyPolicy } from "./playerlatencypolicy";
import { PriorityConfiguration } from "./priorityconfiguration";
/**
 * <p>Configuration for a game session placement mechanism that processes requests for new game sessions. A queue can be used on its own or as part of a matchmaking solution.</p> <p> <b>Related actions</b> </p> <p> <a>CreateGameSessionQueue</a> | <a>DescribeGameSessionQueues</a> | <a>UpdateGameSessionQueue</a> </p>
**/
export declare class GameSessionQueue extends SpeakeasyBase {
    customEventData?: string;
    destinations?: GameSessionQueueDestination[];
    filterConfiguration?: FilterConfiguration;
    gameSessionQueueArn?: string;
    name?: string;
    notificationTarget?: string;
    playerLatencyPolicies?: PlayerLatencyPolicy[];
    priorityConfiguration?: PriorityConfiguration;
    timeoutInSeconds?: number;
}
