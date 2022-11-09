import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefaultGatewayRouteRewriteEnum } from "./defaultgatewayrouterewriteenum";


// HttpGatewayRoutePrefixRewrite
/** 
 * An object representing the beginning characters of the route to rewrite.
**/
export class HttpGatewayRoutePrefixRewrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultPrefix" })
  defaultPrefix?: DefaultGatewayRouteRewriteEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
