import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A list of fleet locations where a game session queue can place new game sessions. You can use a filter to temporarily turn off placements for specific locations. For queues that have multi-location fleets, you can use a filter configuration allow placement with some, but not all of these locations.</p> <p>Filter configurations are part of a <a>GameSessionQueue</a>.</p>
**/
export declare class FilterConfiguration extends SpeakeasyBase {
    allowedLocations?: string[];
}
