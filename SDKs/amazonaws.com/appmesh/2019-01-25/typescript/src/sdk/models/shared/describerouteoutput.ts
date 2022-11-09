import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RouteData } from "./routedata";


// DescribeRouteOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class DescribeRouteOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=route" })
  route: RouteData;
}
