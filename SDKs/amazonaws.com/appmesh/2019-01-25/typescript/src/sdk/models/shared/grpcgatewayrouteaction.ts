import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrpcGatewayRouteRewrite } from "./grpcgatewayrouterewrite";
import { GatewayRouteTarget } from "./gatewayroutetarget";


// GrpcGatewayRouteAction
/** 
 * An object that represents the action to take if a match is determined.
**/
export class GrpcGatewayRouteAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=rewrite" })
  rewrite?: GrpcGatewayRouteRewrite;

  @Metadata({ data: "json, name=target" })
  target: GatewayRouteTarget;
}
