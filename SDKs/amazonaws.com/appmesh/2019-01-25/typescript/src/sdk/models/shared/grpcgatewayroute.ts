import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrpcGatewayRouteAction } from "./grpcgatewayrouteaction";
import { GrpcGatewayRouteMatch } from "./grpcgatewayroutematch";


// GrpcGatewayRoute
/** 
 * An object that represents a gRPC gateway route.
**/
export class GrpcGatewayRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GrpcGatewayRouteAction;

  @Metadata({ data: "json, name=match" })
  match: GrpcGatewayRouteMatch;
}
