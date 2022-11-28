import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAssociation } from "./transitgatewayassociation";



export class DisassociateTransitGatewayRouteTableResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  association?: TransitGatewayAssociation;
}
