import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Subnet
/** 
 * Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX.
**/
export class Subnet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubnetAvailabilityZone" })
  subnetAvailabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIdentifier" })
  subnetIdentifier?: string;
}
