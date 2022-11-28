import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetCidrReservation } from "./subnetcidrreservation";



export class CreateSubnetCidrReservationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnetCidrReservation?: SubnetCidrReservation;
}
