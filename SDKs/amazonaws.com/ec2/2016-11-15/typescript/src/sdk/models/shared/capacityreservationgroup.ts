import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CapacityReservationGroup
/** 
 * Describes a resource group to which a Capacity Reservation has been added.
**/
export class CapacityReservationGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupArn?: string;

  @SpeakeasyMetadata()
  ownerId?: string;
}
