import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayRouteTableAssociation } from "./transitgatewayroutetableassociation";



export class GetTransitGatewayRouteTableAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TransitGatewayRouteTableAssociation })
  associations?: TransitGatewayRouteTableAssociation[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
