import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransitGatewayMulticastRegisteredGroupMembers
/** 
 * Describes the registered transit gateway multicast group members.
**/
export class TransitGatewayMulticastRegisteredGroupMembers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupIpAddress?: string;

  @SpeakeasyMetadata()
  registeredNetworkInterfaceIds?: string[];

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: string;
}
