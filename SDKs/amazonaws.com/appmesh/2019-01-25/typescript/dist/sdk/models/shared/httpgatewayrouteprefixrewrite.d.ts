import { SpeakeasyBase } from "../../../internal/utils";
import { DefaultGatewayRouteRewriteEnum } from "./defaultgatewayrouterewriteenum";
/**
 * An object representing the beginning characters of the route to rewrite.
**/
export declare class HttpGatewayRoutePrefixRewrite extends SpeakeasyBase {
    defaultPrefix?: DefaultGatewayRouteRewriteEnum;
    value?: string;
}
