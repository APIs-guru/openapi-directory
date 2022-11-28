import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NatGatewayAddress
/** 
 * Describes the IP addresses and network interface associated with a NAT gateway.
**/
export class NatGatewayAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationId?: string;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  privateIp?: string;

  @SpeakeasyMetadata()
  publicIp?: string;
}
