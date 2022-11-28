import { SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
/**
 * Represents the input for a request operation.
**/
export declare class StartMatchmakingInput extends SpeakeasyBase {
    configurationName: string;
    players: Player[];
    ticketId?: string;
}
