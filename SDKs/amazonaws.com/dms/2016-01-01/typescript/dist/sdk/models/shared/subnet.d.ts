import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
/**
 * In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status.
**/
export declare class Subnet extends SpeakeasyBase {
    subnetAvailabilityZone?: AvailabilityZone;
    subnetIdentifier?: string;
    subnetStatus?: string;
}
