import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";



// Subnet
/** 
 * In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status.
**/
export class Subnet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubnetAvailabilityZone" })
  subnetAvailabilityZone?: AvailabilityZone;

  @SpeakeasyMetadata({ data: "json, name=SubnetIdentifier" })
  subnetIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetStatus" })
  subnetStatus?: string;
}
