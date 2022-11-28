import { SpeakeasyBase } from "../../../internal/utils";
import { HttpGatewayRouteRewrite } from "./httpgatewayrouterewrite";
import { GatewayRouteTarget } from "./gatewayroutetarget";
/**
 * An object that represents the action to take if a match is determined.
**/
export declare class HttpGatewayRouteAction extends SpeakeasyBase {
    rewrite?: HttpGatewayRouteRewrite;
    target: GatewayRouteTarget;
}
