import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GatewayRouteHostnameRewrite } from "./gatewayroutehostnamerewrite";


// GrpcGatewayRouteRewrite
/** 
 * An object that represents the gateway route to rewrite.
**/
export class GrpcGatewayRouteRewrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname?: GatewayRouteHostnameRewrite;
}
