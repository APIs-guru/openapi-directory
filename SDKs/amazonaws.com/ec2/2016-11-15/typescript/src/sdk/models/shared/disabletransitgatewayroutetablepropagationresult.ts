import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayPropagation } from "./transitgatewaypropagation";



export class DisableTransitGatewayRouteTablePropagationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  propagation?: TransitGatewayPropagation;
}
