import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransitGatewayMulticastDeregisteredGroupSources
/** 
 * Describes the deregistered transit gateway multicast group sources.
**/
export class TransitGatewayMulticastDeregisteredGroupSources extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deregisteredNetworkInterfaceIds?: string[];

  @SpeakeasyMetadata()
  groupIpAddress?: string;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: string;
}
