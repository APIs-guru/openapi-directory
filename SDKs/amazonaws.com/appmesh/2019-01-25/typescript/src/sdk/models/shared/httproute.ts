import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpRouteAction } from "./httprouteaction";
import { HttpRouteMatch } from "./httproutematch";
import { HttpRetryPolicy } from "./httpretrypolicy";
import { HttpTimeout } from "./httptimeout";


// HttpRoute
/** 
 * An object that represents an HTTP or HTTP/2 route type.
**/
export class HttpRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: HttpRouteAction;

  @Metadata({ data: "json, name=match" })
  match: HttpRouteMatch;

  @Metadata({ data: "json, name=retryPolicy" })
  retryPolicy?: HttpRetryPolicy;

  @Metadata({ data: "json, name=timeout" })
  timeout?: HttpTimeout;
}
