import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayRoute } from "./transitgatewayroute";



export class ReplaceTransitGatewayRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  route?: TransitGatewayRoute;
}
