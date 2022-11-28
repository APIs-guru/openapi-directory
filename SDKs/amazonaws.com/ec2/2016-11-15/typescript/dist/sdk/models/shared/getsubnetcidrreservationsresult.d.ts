import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetCidrReservation } from "./subnetcidrreservation";
export declare class GetSubnetCidrReservationsResult extends SpeakeasyBase {
    nextToken?: string;
    subnetIpv4CidrReservations?: SubnetCidrReservation[];
    subnetIpv6CidrReservations?: SubnetCidrReservation[];
}
