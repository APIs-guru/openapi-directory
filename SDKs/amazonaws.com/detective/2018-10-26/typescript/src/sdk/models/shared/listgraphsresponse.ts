import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Graph } from "./graph";



export class ListGraphsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GraphList", elemType: Graph })
  graphList?: Graph[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
