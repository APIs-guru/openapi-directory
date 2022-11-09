import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Route } from "./route";


export class GetRoutesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.Route })
  items?: Route[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
