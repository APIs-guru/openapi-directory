import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteResponse } from "./routeresponse";



export class GetRouteResponsesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: RouteResponse })
  items?: RouteResponse[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
