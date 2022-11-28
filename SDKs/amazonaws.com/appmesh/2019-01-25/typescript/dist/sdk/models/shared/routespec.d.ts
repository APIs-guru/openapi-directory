import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRoute } from "./grpcroute";
import { HttpRoute } from "./httproute";
import { TcpRoute } from "./tcproute";
/**
 * An object that represents a route specification. Specify one route type.
**/
export declare class RouteSpec extends SpeakeasyBase {
    grpcRoute?: GrpcRoute;
    http2Route?: HttpRoute;
    httpRoute?: HttpRoute;
    priority?: number;
    tcpRoute?: TcpRoute;
}
