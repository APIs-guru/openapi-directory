import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteAction } from "./httprouteaction";
import { HttpRouteMatch } from "./httproutematch";



// HttpRoute
/** 
 * An object representing the HTTP routing specification for a route.
**/
export class HttpRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: HttpRouteAction;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: HttpRouteMatch;
}
