import { SpeakeasyBase } from "../../../internal/utils";
import { OfferingTransaction } from "./offeringtransaction";
/**
 * Returns the transaction log of the specified offerings.
**/
export declare class ListOfferingTransactionsResult extends SpeakeasyBase {
    nextToken?: string;
    offeringTransactions?: OfferingTransaction[];
}
