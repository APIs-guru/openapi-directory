import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrivateIpAddressSpecification
/** 
 * Describes a secondary private IPv4 address for a network interface.
**/
export class PrivateIpAddressSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  primary?: boolean;

  @SpeakeasyMetadata()
  privateIpAddress?: string;
}
