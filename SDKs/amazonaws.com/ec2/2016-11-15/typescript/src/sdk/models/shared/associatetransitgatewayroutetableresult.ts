import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAssociation } from "./transitgatewayassociation";



export class AssociateTransitGatewayRouteTableResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  association?: TransitGatewayAssociation;
}
