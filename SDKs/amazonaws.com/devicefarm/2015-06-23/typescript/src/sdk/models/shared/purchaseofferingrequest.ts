import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PurchaseOfferingRequest
/** 
 * Represents a request for a purchase offering.
**/
export class PurchaseOfferingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offeringId" })
  offeringId: string;

  @SpeakeasyMetadata({ data: "json, name=offeringPromotionId" })
  offeringPromotionId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;
}
