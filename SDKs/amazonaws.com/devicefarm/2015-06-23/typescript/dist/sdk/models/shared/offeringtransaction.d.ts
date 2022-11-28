import { SpeakeasyBase } from "../../../internal/utils";
import { MonetaryAmount } from "./monetaryamount";
import { OfferingStatus } from "./offeringstatus";
/**
 * Represents the metadata of an offering transaction.
**/
export declare class OfferingTransaction extends SpeakeasyBase {
    cost?: MonetaryAmount;
    createdOn?: Date;
    offeringPromotionId?: string;
    offeringStatus?: OfferingStatus;
    transactionId?: string;
}
