import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { SubnetOutpost } from "./subnetoutpost";



// Subnet
/** 
 * Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.
**/
export class Subnet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnetAvailabilityZone?: AvailabilityZone;

  @SpeakeasyMetadata()
  subnetIdentifier?: string;

  @SpeakeasyMetadata()
  subnetOutpost?: SubnetOutpost;
}
