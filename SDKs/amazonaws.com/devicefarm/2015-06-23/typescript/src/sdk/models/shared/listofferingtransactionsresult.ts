import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OfferingTransaction } from "./offeringtransaction";


// ListOfferingTransactionsResult
/** 
 * Returns the transaction log of the specified offerings.
**/
export class ListOfferingTransactionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=offeringTransactions", elemType: shared.OfferingTransaction })
  offeringTransactions?: OfferingTransaction[];
}
