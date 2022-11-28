import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayPropagation } from "./transitgatewaypropagation";



export class EnableTransitGatewayRouteTablePropagationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  propagation?: TransitGatewayPropagation;
}
