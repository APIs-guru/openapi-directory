import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcGatewayRouteAction } from "./grpcgatewayrouteaction";
import { GrpcGatewayRouteMatch } from "./grpcgatewayroutematch";
/**
 * An object that represents a gRPC gateway route.
**/
export declare class GrpcGatewayRoute extends SpeakeasyBase {
    action: GrpcGatewayRouteAction;
    match: GrpcGatewayRouteMatch;
}
