import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.
**/
export declare class Player extends SpeakeasyBase {
    latencyInMs?: Map<string, number>;
    playerAttributes?: Map<string, AttributeValue>;
    playerId?: string;
    team?: string;
}
