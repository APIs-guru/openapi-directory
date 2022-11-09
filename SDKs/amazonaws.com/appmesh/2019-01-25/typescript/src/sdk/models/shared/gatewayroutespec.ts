import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrpcGatewayRoute } from "./grpcgatewayroute";
import { HttpGatewayRoute } from "./httpgatewayroute";
import { HttpGatewayRoute } from "./httpgatewayroute";


// GatewayRouteSpec
/** 
 * An object that represents a gateway route specification. Specify one gateway route type.
**/
export class GatewayRouteSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=grpcRoute" })
  grpcRoute?: GrpcGatewayRoute;

  @Metadata({ data: "json, name=http2Route" })
  http2Route?: HttpGatewayRoute;

  @Metadata({ data: "json, name=httpRoute" })
  httpRoute?: HttpGatewayRoute;

  @Metadata({ data: "json, name=priority" })
  priority?: number;
}
