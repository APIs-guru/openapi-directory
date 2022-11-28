import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayMulticastDomainAssociation } from "./transitgatewaymulticastdomainassociation";



export class GetTransitGatewayMulticastDomainAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TransitGatewayMulticastDomainAssociation })
  multicastDomainAssociations?: TransitGatewayMulticastDomainAssociation[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
