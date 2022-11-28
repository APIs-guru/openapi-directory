import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRoute } from "./httproute";



// RouteSpec
/** 
 * An object representing the specification of a route.
**/
export class RouteSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpRoute" })
  httpRoute?: HttpRoute;
}
