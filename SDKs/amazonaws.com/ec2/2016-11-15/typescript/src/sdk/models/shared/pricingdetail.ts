import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PricingDetail
/** 
 * Describes a Reserved Instance offering.
**/
export class PricingDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  count?: number;

  @SpeakeasyMetadata()
  price?: number;
}
