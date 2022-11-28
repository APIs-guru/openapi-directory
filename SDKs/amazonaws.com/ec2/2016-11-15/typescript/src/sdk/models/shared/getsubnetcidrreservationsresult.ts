import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetCidrReservation } from "./subnetcidrreservation";



export class GetSubnetCidrReservationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: SubnetCidrReservation })
  subnetIpv4CidrReservations?: SubnetCidrReservation[];

  @SpeakeasyMetadata({ elemType: SubnetCidrReservation })
  subnetIpv6CidrReservations?: SubnetCidrReservation[];
}
