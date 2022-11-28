import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteHostnameRewrite } from "./gatewayroutehostnamerewrite";
import { HttpGatewayRoutePathRewrite } from "./httpgatewayroutepathrewrite";
import { HttpGatewayRoutePrefixRewrite } from "./httpgatewayrouteprefixrewrite";



// HttpGatewayRouteRewrite
/** 
 * An object representing the gateway route to rewrite.
**/
export class HttpGatewayRouteRewrite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: GatewayRouteHostnameRewrite;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: HttpGatewayRoutePathRewrite;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: HttpGatewayRoutePrefixRewrite;
}
