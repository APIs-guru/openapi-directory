import { SpeakeasyBase } from "../../../internal/utils";
import { DesiredPlayerSession } from "./desiredplayersession";
import { GameProperty } from "./gameproperty";
import { PlayerLatency } from "./playerlatency";
/**
 * Represents the input for a request operation.
**/
export declare class StartGameSessionPlacementInput extends SpeakeasyBase {
    desiredPlayerSessions?: DesiredPlayerSession[];
    gameProperties?: GameProperty[];
    gameSessionData?: string;
    gameSessionName?: string;
    gameSessionQueueName: string;
    maximumPlayerSessionCount: number;
    placementId: string;
    playerLatencies?: PlayerLatency[];
}
