import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetCidrReservation } from "./subnetcidrreservation";



export class DeleteSubnetCidrReservationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deletedSubnetCidrReservation?: SubnetCidrReservation;
}
