import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HostReservation } from "./hostreservation";



export class DescribeHostReservationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: HostReservation })
  hostReservationSet?: HostReservation[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
