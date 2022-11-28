import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservation } from "./capacityreservation";



export class CreateCapacityReservationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityReservation?: CapacityReservation;
}
