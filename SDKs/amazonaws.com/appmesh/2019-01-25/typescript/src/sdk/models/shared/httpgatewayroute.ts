import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpGatewayRouteAction } from "./httpgatewayrouteaction";
import { HttpGatewayRouteMatch } from "./httpgatewayroutematch";



// HttpGatewayRoute
/** 
 * An object that represents an HTTP gateway route.
**/
export class HttpGatewayRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: HttpGatewayRouteAction;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match: HttpGatewayRouteMatch;
}
