import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PurchaseOfferingRequest
/** 
 * Represents a request for a purchase offering.
**/
export class PurchaseOfferingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=offeringId" })
  offeringId: string;

  @Metadata({ data: "json, name=offeringPromotionId" })
  offeringPromotionId?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity: number;
}
