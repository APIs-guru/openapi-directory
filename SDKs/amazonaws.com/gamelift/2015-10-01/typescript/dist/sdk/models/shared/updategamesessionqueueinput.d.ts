import { SpeakeasyBase } from "../../../internal/utils";
import { GameSessionQueueDestination } from "./gamesessionqueuedestination";
import { FilterConfiguration } from "./filterconfiguration";
import { PlayerLatencyPolicy } from "./playerlatencypolicy";
import { PriorityConfiguration } from "./priorityconfiguration";
/**
 * Represents the input for a request operation.
**/
export declare class UpdateGameSessionQueueInput extends SpeakeasyBase {
    customEventData?: string;
    destinations?: GameSessionQueueDestination[];
    filterConfiguration?: FilterConfiguration;
    name: string;
    notificationTarget?: string;
    playerLatencyPolicies?: PlayerLatencyPolicy[];
    priorityConfiguration?: PriorityConfiguration;
    timeoutInSeconds?: number;
}
