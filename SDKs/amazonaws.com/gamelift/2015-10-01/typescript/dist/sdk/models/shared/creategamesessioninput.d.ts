import { SpeakeasyBase } from "../../../internal/utils";
import { GameProperty } from "./gameproperty";
/**
 * Represents the input for a request operation.
**/
export declare class CreateGameSessionInput extends SpeakeasyBase {
    aliasId?: string;
    creatorId?: string;
    fleetId?: string;
    gameProperties?: GameProperty[];
    gameSessionData?: string;
    gameSessionId?: string;
    idempotencyToken?: string;
    location?: string;
    maximumPlayerSessionCount: number;
    name?: string;
}
