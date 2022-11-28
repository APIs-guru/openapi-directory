import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteRef } from "./routeref";



export class ListRoutesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: RouteRef })
  routes: RouteRef[];
}
