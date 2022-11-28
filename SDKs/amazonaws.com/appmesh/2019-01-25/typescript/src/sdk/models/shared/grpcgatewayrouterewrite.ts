import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GatewayRouteHostnameRewrite } from "./gatewayroutehostnamerewrite";



// GrpcGatewayRouteRewrite
/** 
 * An object that represents the gateway route to rewrite.
**/
export class GrpcGatewayRouteRewrite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: GatewayRouteHostnameRewrite;
}
