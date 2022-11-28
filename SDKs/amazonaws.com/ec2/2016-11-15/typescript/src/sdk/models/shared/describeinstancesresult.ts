import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reservation } from "./reservation";



export class DescribeInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: Reservation })
  reservations?: Reservation[];
}
