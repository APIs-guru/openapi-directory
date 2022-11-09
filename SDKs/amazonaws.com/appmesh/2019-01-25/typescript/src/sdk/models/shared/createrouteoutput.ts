import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RouteData } from "./routedata";


// CreateRouteOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class CreateRouteOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=route" })
  route: RouteData;
}
