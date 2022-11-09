import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RouteData } from "./routedata";


export class DescribeRouteOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=route" })
  route?: RouteData;
}
