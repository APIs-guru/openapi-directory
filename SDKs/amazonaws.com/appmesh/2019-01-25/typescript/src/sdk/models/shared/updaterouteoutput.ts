import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RouteData } from "./routedata";


// UpdateRouteOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class UpdateRouteOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=route" })
  route: RouteData;
}
