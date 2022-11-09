import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Subnet
/** 
 * Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX.
**/
export class Subnet extends SpeakeasyBase {
  @Metadata({ data: "json, name=SubnetAvailabilityZone" })
  subnetAvailabilityZone?: string;

  @Metadata({ data: "json, name=SubnetIdentifier" })
  subnetIdentifier?: string;
}
