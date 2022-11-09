import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpRouteAction } from "./httprouteaction";
import { HttpRouteMatch } from "./httproutematch";


// HttpRoute
/** 
 * An object representing the HTTP routing specification for a route.
**/
export class HttpRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: HttpRouteAction;

  @Metadata({ data: "json, name=match" })
  match?: HttpRouteMatch;
}
