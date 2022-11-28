import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransitGatewayMulticastDeregisteredGroupMembers
/** 
 * Describes the deregistered transit gateway multicast group members.
**/
export class TransitGatewayMulticastDeregisteredGroupMembers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deregisteredNetworkInterfaceIds?: string[];

  @SpeakeasyMetadata()
  groupIpAddress?: string;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: string;
}
