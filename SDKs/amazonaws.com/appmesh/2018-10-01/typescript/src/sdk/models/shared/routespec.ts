import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpRoute } from "./httproute";


// RouteSpec
/** 
 * An object representing the specification of a route.
**/
export class RouteSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpRoute" })
  httpRoute?: HttpRoute;
}
