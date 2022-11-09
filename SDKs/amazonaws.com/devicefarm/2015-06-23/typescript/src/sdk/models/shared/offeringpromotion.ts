import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OfferingPromotion
/** 
 * Represents information about an offering promotion.
**/
export class OfferingPromotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
