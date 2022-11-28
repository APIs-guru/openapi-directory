import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OfferingTransaction } from "./offeringtransaction";



// PurchaseOfferingResult
/** 
 * The result of the purchase offering (for example, success or failure).
**/
export class PurchaseOfferingResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offeringTransaction" })
  offeringTransaction?: OfferingTransaction;
}
