import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayRoute } from "./transitgatewayroute";



export class CreateTransitGatewayRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  route?: TransitGatewayRoute;
}
