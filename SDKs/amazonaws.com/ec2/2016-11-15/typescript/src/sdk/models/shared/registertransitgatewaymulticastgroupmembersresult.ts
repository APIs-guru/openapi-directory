import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulticastRegisteredGroupMembers } from "./transitgatewaymulticastregisteredgroupmembers";



export class RegisterTransitGatewayMulticastGroupMembersResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  registeredMulticastGroupMembers?: TransitGatewayMulticastRegisteredGroupMembers;
}
