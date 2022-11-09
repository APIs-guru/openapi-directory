import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrpcRoute } from "./grpcroute";
import { HttpRoute } from "./httproute";
import { HttpRoute } from "./httproute";
import { TcpRoute } from "./tcproute";


// RouteSpec
/** 
 * An object that represents a route specification. Specify one route type.
**/
export class RouteSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=grpcRoute" })
  grpcRoute?: GrpcRoute;

  @Metadata({ data: "json, name=http2Route" })
  http2Route?: HttpRoute;

  @Metadata({ data: "json, name=httpRoute" })
  httpRoute?: HttpRoute;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=tcpRoute" })
  tcpRoute?: TcpRoute;
}
