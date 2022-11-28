import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationPreferenceEnum } from "./capacityreservationpreferenceenum";
import { CapacityReservationTargetResponse } from "./capacityreservationtargetresponse";



// CapacityReservationSpecificationResponse
/** 
 * Describes the instance's Capacity Reservation targeting preferences. The action returns the <code>capacityReservationPreference</code> response element if the instance is configured to run in On-Demand capacity, or if it is configured in run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). The action returns the <code>capacityReservationTarget</code> response element if the instance explicily targets a specific Capacity Reservation or Capacity Reservation group.
**/
export class CapacityReservationSpecificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityReservationPreference?: CapacityReservationPreferenceEnum;

  @SpeakeasyMetadata()
  capacityReservationTarget?: CapacityReservationTargetResponse;
}
