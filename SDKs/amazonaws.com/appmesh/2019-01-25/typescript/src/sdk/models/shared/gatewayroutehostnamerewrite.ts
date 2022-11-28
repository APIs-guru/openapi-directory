import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultGatewayRouteRewriteEnum } from "./defaultgatewayrouterewriteenum";



// GatewayRouteHostnameRewrite
/** 
 * An object representing the gateway route host name to rewrite.
**/
export class GatewayRouteHostnameRewrite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultTargetHostname" })
  defaultTargetHostname?: DefaultGatewayRouteRewriteEnum;
}
