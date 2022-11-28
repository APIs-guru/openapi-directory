import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteData } from "./routedata";



// DescribeRouteOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DescribeRouteOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=route" })
  route: RouteData;
}
