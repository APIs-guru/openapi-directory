import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Regional latency information for a player, used when requesting a new game session with <a>StartGameSessionPlacement</a>. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified Region. The relative difference between a player's latency values for multiple Regions are used to determine which fleets are best suited to place a new game session for the player.
**/
export declare class PlayerLatency extends SpeakeasyBase {
    latencyInMilliseconds?: number;
    playerId?: string;
    regionIdentifier?: string;
}
