import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcGatewayRouteRewrite } from "./grpcgatewayrouterewrite";
import { GatewayRouteTarget } from "./gatewayroutetarget";



// GrpcGatewayRouteAction
/** 
 * An object that represents the action to take if a match is determined.
**/
export class GrpcGatewayRouteAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rewrite" })
  rewrite?: GrpcGatewayRouteRewrite;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: GatewayRouteTarget;
}
