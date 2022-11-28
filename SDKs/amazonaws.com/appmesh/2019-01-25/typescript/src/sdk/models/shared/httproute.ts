import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteAction } from "./httprouteaction";
import { HttpRouteMatch } from "./httproutematch";
import { HttpRetryPolicy } from "./httpretrypolicy";
import { HttpTimeout } from "./httptimeout";



// HttpRoute
/** 
 * An object that represents an HTTP or HTTP/2 route type.
**/
export class HttpRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: HttpRouteAction;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match: HttpRouteMatch;

  @SpeakeasyMetadata({ data: "json, name=retryPolicy" })
  retryPolicy?: HttpRetryPolicy;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: HttpTimeout;
}
