import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalGatewayRoute } from "./localgatewayroute";



export class CreateLocalGatewayRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  route?: LocalGatewayRoute;
}
