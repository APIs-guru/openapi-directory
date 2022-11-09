import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Graph } from "./graph";


export class ListGraphsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=GraphList", elemType: shared.Graph })
  graphList?: Graph[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
