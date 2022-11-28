import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class CreatePlayerSessionInput extends SpeakeasyBase {
    gameSessionId: string;
    playerData?: string;
    playerId: string;
}
