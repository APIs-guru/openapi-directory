import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RouteRef } from "./routeref";


export class ListRoutesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=routes", elemType: shared.RouteRef })
  routes: RouteRef[];
}
