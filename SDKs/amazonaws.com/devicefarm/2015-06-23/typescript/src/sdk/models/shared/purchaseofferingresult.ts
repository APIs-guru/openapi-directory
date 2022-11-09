import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OfferingTransaction } from "./offeringtransaction";


// PurchaseOfferingResult
/** 
 * The result of the purchase offering (for example, success or failure).
**/
export class PurchaseOfferingResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=offeringTransaction" })
  offeringTransaction?: OfferingTransaction;
}
