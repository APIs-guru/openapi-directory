import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteData } from "./routedata";



export class DeleteRouteOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=route" })
  route?: RouteData;
}
