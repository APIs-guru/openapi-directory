import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";



// Subnet
/** 
 *  Detailed information about a subnet. 
**/
export class Subnet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnetAvailabilityZone?: AvailabilityZone;

  @SpeakeasyMetadata()
  subnetIdentifier?: string;

  @SpeakeasyMetadata()
  subnetStatus?: string;
}
