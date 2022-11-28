import { SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
/**
 * Represents the input for a request operation.
**/
export declare class StartMatchBackfillInput extends SpeakeasyBase {
    configurationName: string;
    gameSessionArn?: string;
    players: Player[];
    ticketId?: string;
}
