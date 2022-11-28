import { SpeakeasyBase } from "../../../internal/utils";
import { Offering } from "./offering";
import { OfferingTransactionTypeEnum } from "./offeringtransactiontypeenum";
/**
 * The status of the offering.
**/
export declare class OfferingStatus extends SpeakeasyBase {
    effectiveOn?: Date;
    offering?: Offering;
    quantity?: number;
    type?: OfferingTransactionTypeEnum;
}
