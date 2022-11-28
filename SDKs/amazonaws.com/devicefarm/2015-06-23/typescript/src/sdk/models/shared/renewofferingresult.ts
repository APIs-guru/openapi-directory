import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OfferingTransaction } from "./offeringtransaction";



// RenewOfferingResult
/** 
 * The result of a renewal offering.
**/
export class RenewOfferingResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offeringTransaction" })
  offeringTransaction?: OfferingTransaction;
}
