import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReservationValue
/** 
 * The cost associated with the Reserved Instance.
**/
export class ReservationValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hourlyPrice?: string;

  @SpeakeasyMetadata()
  remainingTotalValue?: string;

  @SpeakeasyMetadata()
  remainingUpfrontValue?: string;
}
