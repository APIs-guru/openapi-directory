import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OfferingTransaction } from "./offeringtransaction";



// ListOfferingTransactionsResult
/** 
 * Returns the transaction log of the specified offerings.
**/
export class ListOfferingTransactionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=offeringTransactions", elemType: OfferingTransaction })
  offeringTransactions?: OfferingTransaction[];
}
