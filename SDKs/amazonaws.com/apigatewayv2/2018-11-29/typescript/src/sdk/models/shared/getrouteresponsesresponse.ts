import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RouteResponse } from "./routeresponse";


export class GetRouteResponsesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.RouteResponse })
  items?: RouteResponse[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
