import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OfferingPromotion
/** 
 * Represents information about an offering promotion.
**/
export class OfferingPromotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
