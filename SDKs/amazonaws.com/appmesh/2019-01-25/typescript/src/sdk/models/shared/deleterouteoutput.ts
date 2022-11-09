import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RouteData } from "./routedata";


// DeleteRouteOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DeleteRouteOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=route" })
  route: RouteData;
}
