import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Route } from "./route";



export class GetRoutesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: Route })
  items?: Route[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
