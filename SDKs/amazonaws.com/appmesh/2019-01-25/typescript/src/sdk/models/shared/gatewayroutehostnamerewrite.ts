import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefaultGatewayRouteRewriteEnum } from "./defaultgatewayrouterewriteenum";


// GatewayRouteHostnameRewrite
/** 
 * An object representing the gateway route host name to rewrite.
**/
export class GatewayRouteHostnameRewrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultTargetHostname" })
  defaultTargetHostname?: DefaultGatewayRouteRewriteEnum;
}
