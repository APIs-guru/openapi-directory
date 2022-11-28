import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransitGatewayMulticastRegisteredGroupSources
/** 
 * Describes the members registered with the transit gateway multicast group.
**/
export class TransitGatewayMulticastRegisteredGroupSources extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupIpAddress?: string;

  @SpeakeasyMetadata()
  registeredNetworkInterfaceIds?: string[];

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: string;
}
