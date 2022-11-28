import { SpeakeasyBase } from "../../../internal/utils";
import { GameSessionQueueDestination } from "./gamesessionqueuedestination";
import { FilterConfiguration } from "./filterconfiguration";
import { PlayerLatencyPolicy } from "./playerlatencypolicy";
import { PriorityConfiguration } from "./priorityconfiguration";
import { Tag } from "./tag";
/**
 * Represents the input for a request operation.
**/
export declare class CreateGameSessionQueueInput extends SpeakeasyBase {
    customEventData?: string;
    destinations?: GameSessionQueueDestination[];
    filterConfiguration?: FilterConfiguration;
    name: string;
    notificationTarget?: string;
    playerLatencyPolicies?: PlayerLatencyPolicy[];
    priorityConfiguration?: PriorityConfiguration;
    tags?: Tag[];
    timeoutInSeconds?: number;
}
