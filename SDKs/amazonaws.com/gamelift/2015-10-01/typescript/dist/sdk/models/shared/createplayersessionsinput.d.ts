import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for a request operation.
**/
export declare class CreatePlayerSessionsInput extends SpeakeasyBase {
    gameSessionId: string;
    playerDataMap?: Map<string, string>;
    playerIds: string[];
}
