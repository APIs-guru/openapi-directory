import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationPreferenceEnum } from "./capacityreservationpreferenceenum";
import { CapacityReservationTargetResponse } from "./capacityreservationtargetresponse";



// LaunchTemplateCapacityReservationSpecificationResponse
/** 
 * Information about the Capacity Reservation targeting option.
**/
export class LaunchTemplateCapacityReservationSpecificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityReservationPreference?: CapacityReservationPreferenceEnum;

  @SpeakeasyMetadata()
  capacityReservationTarget?: CapacityReservationTargetResponse;
}
