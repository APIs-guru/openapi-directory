import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GatewayRouteHostnameRewrite } from "./gatewayroutehostnamerewrite";
import { HttpGatewayRoutePathRewrite } from "./httpgatewayroutepathrewrite";
import { HttpGatewayRoutePrefixRewrite } from "./httpgatewayrouteprefixrewrite";


// HttpGatewayRouteRewrite
/** 
 * An object representing the gateway route to rewrite.
**/
export class HttpGatewayRouteRewrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname?: GatewayRouteHostnameRewrite;

  @Metadata({ data: "json, name=path" })
  path?: HttpGatewayRoutePathRewrite;

  @Metadata({ data: "json, name=prefix" })
  prefix?: HttpGatewayRoutePrefixRewrite;
}
