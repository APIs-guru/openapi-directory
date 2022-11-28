import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalGatewayRoute } from "./localgatewayroute";



export class DeleteLocalGatewayRouteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  route?: LocalGatewayRoute;
}
