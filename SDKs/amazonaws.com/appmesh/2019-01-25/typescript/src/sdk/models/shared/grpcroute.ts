import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrpcRouteAction } from "./grpcrouteaction";
import { GrpcRouteMatch } from "./grpcroutematch";
import { GrpcRetryPolicy } from "./grpcretrypolicy";
import { GrpcTimeout } from "./grpctimeout";


// GrpcRoute
/** 
 * An object that represents a gRPC route type.
**/
export class GrpcRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GrpcRouteAction;

  @Metadata({ data: "json, name=match" })
  match: GrpcRouteMatch;

  @Metadata({ data: "json, name=retryPolicy" })
  retryPolicy?: GrpcRetryPolicy;

  @Metadata({ data: "json, name=timeout" })
  timeout?: GrpcTimeout;
}
