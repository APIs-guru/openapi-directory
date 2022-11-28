import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CapacityReservationTargetResponse
/** 
 * Describes a target Capacity Reservation or Capacity Reservation group.
**/
export class CapacityReservationTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityReservationId?: string;

  @SpeakeasyMetadata()
  capacityReservationResourceGroupArn?: string;
}
