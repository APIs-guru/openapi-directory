import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayRoute } from "./transitgatewayroute";



export class DeleteTransitGatewayRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  route?: TransitGatewayRoute;
}
