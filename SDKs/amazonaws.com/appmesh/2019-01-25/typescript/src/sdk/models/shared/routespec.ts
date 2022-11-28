import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcRoute } from "./grpcroute";
import { HttpRoute } from "./httproute";
import { TcpRoute } from "./tcproute";



// RouteSpec
/** 
 * An object that represents a route specification. Specify one route type.
**/
export class RouteSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grpcRoute" })
  grpcRoute?: GrpcRoute;

  @SpeakeasyMetadata({ data: "json, name=http2Route" })
  http2Route?: HttpRoute;

  @SpeakeasyMetadata({ data: "json, name=httpRoute" })
  httpRoute?: HttpRoute;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=tcpRoute" })
  tcpRoute?: TcpRoute;
}
