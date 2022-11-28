import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcGatewayRoute } from "./grpcgatewayroute";
import { HttpGatewayRoute } from "./httpgatewayroute";



// GatewayRouteSpec
/** 
 * An object that represents a gateway route specification. Specify one gateway route type.
**/
export class GatewayRouteSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grpcRoute" })
  grpcRoute?: GrpcGatewayRoute;

  @SpeakeasyMetadata({ data: "json, name=http2Route" })
  http2Route?: HttpGatewayRoute;

  @SpeakeasyMetadata({ data: "json, name=httpRoute" })
  httpRoute?: HttpGatewayRoute;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;
}
