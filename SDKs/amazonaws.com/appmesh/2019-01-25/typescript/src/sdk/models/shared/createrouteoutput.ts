import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteData } from "./routedata";



// CreateRouteOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class CreateRouteOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=route" })
  route: RouteData;
}
