import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteData } from "./routedata";



export class UpdateRouteOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=route" })
  route?: RouteData;
}
