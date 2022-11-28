import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrpcRouteAction } from "./grpcrouteaction";
import { GrpcRouteMatch } from "./grpcroutematch";
import { GrpcRetryPolicy } from "./grpcretrypolicy";
import { GrpcTimeout } from "./grpctimeout";



// GrpcRoute
/** 
 * An object that represents a gRPC route type.
**/
export class GrpcRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GrpcRouteAction;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match: GrpcRouteMatch;

  @SpeakeasyMetadata({ data: "json, name=retryPolicy" })
  retryPolicy?: GrpcRetryPolicy;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: GrpcTimeout;
}
