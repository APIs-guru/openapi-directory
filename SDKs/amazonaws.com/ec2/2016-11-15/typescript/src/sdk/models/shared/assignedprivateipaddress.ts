import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssignedPrivateIpAddress
/** 
 * Describes the private IP addresses assigned to a network interface.
**/
export class AssignedPrivateIpAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  privateIpAddress?: string;
}
