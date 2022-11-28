import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultGatewayRouteRewriteEnum } from "./defaultgatewayrouterewriteenum";



// HttpGatewayRoutePrefixRewrite
/** 
 * An object representing the beginning characters of the route to rewrite.
**/
export class HttpGatewayRoutePrefixRewrite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultPrefix" })
  defaultPrefix?: DefaultGatewayRouteRewriteEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
