import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcGatewayRouteRewrite } from "./grpcgatewayrouterewrite";
import { GatewayRouteTarget } from "./gatewayroutetarget";
/**
 * An object that represents the action to take if a match is determined.
**/
export declare class GrpcGatewayRouteAction extends SpeakeasyBase {
    rewrite?: GrpcGatewayRouteRewrite;
    target: GatewayRouteTarget;
}
