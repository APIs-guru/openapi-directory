import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpGatewayRouteAction } from "./httpgatewayrouteaction";
import { HttpGatewayRouteMatch } from "./httpgatewayroutematch";


// HttpGatewayRoute
/** 
 * An object that represents an HTTP gateway route.
**/
export class HttpGatewayRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: HttpGatewayRouteAction;

  @Metadata({ data: "json, name=match" })
  match: HttpGatewayRouteMatch;
}
