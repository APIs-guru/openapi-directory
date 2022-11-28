import { SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteHostnameRewrite } from "./gatewayroutehostnamerewrite";
import { HttpGatewayRoutePathRewrite } from "./httpgatewayroutepathrewrite";
import { HttpGatewayRoutePrefixRewrite } from "./httpgatewayrouteprefixrewrite";
/**
 * An object representing the gateway route to rewrite.
**/
export declare class HttpGatewayRouteRewrite extends SpeakeasyBase {
    hostname?: GatewayRouteHostnameRewrite;
    path?: HttpGatewayRoutePathRewrite;
    prefix?: HttpGatewayRoutePrefixRewrite;
}
