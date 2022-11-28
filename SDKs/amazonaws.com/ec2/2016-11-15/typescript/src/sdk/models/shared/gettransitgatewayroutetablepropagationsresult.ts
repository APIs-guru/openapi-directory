import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayRouteTablePropagation } from "./transitgatewayroutetablepropagation";



export class GetTransitGatewayRouteTablePropagationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TransitGatewayRouteTablePropagation })
  transitGatewayRouteTablePropagations?: TransitGatewayRouteTablePropagation[];
}
