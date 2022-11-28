import { SpeakeasyBase } from "../../../internal/utils";
import { HttpGatewayRouteAction } from "./httpgatewayrouteaction";
import { HttpGatewayRouteMatch } from "./httpgatewayroutematch";
/**
 * An object that represents an HTTP gateway route.
**/
export declare class HttpGatewayRoute extends SpeakeasyBase {
    action: HttpGatewayRouteAction;
    match: HttpGatewayRouteMatch;
}
