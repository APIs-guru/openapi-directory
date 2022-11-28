import { SpeakeasyBase } from "../../../internal/utils";
import { AcceptanceTypeEnum } from "./acceptancetypeenum";
/**
 * Represents the input for a request operation.
**/
export declare class AcceptMatchInput extends SpeakeasyBase {
    acceptanceType: AcceptanceTypeEnum;
    playerIds: string[];
    ticketId: string;
}
