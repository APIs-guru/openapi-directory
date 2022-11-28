import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteData } from "./routedata";



// UpdateRouteOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class UpdateRouteOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=route" })
  route: RouteData;
}
