import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservation } from "./capacityreservation";



export class DescribeCapacityReservationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CapacityReservation })
  capacityReservations?: CapacityReservation[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
