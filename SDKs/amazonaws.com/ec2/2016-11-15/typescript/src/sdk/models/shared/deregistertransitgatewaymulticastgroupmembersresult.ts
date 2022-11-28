import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulticastDeregisteredGroupMembers } from "./transitgatewaymulticastderegisteredgroupmembers";



export class DeregisterTransitGatewayMulticastGroupMembersResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers;
}
