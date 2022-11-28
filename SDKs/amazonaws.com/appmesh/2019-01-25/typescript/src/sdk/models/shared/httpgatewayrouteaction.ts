import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpGatewayRouteRewrite } from "./httpgatewayrouterewrite";
import { GatewayRouteTarget } from "./gatewayroutetarget";



// HttpGatewayRouteAction
/** 
 * An object that represents the action to take if a match is determined.
**/
export class HttpGatewayRouteAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rewrite" })
  rewrite?: HttpGatewayRouteRewrite;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: GatewayRouteTarget;
}
