import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OfferingTransaction } from "./offeringtransaction";


// RenewOfferingResult
/** 
 * The result of a renewal offering.
**/
export class RenewOfferingResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=offeringTransaction" })
  offeringTransaction?: OfferingTransaction;
}
