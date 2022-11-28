import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulticastDomainAssociations } from "./transitgatewaymulticastdomainassociations";



export class DisassociateTransitGatewayMulticastDomainResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associations?: TransitGatewayMulticastDomainAssociations;
}
