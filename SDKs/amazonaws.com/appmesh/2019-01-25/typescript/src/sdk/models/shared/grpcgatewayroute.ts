import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcGatewayRouteAction } from "./grpcgatewayrouteaction";
import { GrpcGatewayRouteMatch } from "./grpcgatewayroutematch";



// GrpcGatewayRoute
/** 
 * An object that represents a gRPC gateway route.
**/
export class GrpcGatewayRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GrpcGatewayRouteAction;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match: GrpcGatewayRouteMatch;
}
