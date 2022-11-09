import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpGatewayRouteRewrite } from "./httpgatewayrouterewrite";
import { GatewayRouteTarget } from "./gatewayroutetarget";


// HttpGatewayRouteAction
/** 
 * An object that represents the action to take if a match is determined.
**/
export class HttpGatewayRouteAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=rewrite" })
  rewrite?: HttpGatewayRouteRewrite;

  @Metadata({ data: "json, name=target" })
  target: GatewayRouteTarget;
}
