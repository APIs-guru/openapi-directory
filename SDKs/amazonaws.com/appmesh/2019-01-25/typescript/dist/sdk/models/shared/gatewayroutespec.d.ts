import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcGatewayRoute } from "./grpcgatewayroute";
import { HttpGatewayRoute } from "./httpgatewayroute";
/**
 * An object that represents a gateway route specification. Specify one gateway route type.
**/
export declare class GatewayRouteSpec extends SpeakeasyBase {
    grpcRoute?: GrpcGatewayRoute;
    http2Route?: HttpGatewayRoute;
    httpRoute?: HttpGatewayRoute;
    priority?: number;
}
