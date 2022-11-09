import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AvailabilityZone } from "./availabilityzone";


// Subnet
/** 
 * In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status.
**/
export class Subnet extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubnetAvailabilityZone" })
  subnetAvailabilityZone?: AvailabilityZone;

  @Metadata({ data: "json, name=SubnetIdentifier" })
  subnetIdentifier?: string;

  @Metadata({ data: "json, name=SubnetStatus" })
  subnetStatus?: string;
}
