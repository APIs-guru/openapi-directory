import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Edge } from "./edge";
import { Node } from "./node";


// WorkflowGraph
/** 
 * A workflow graph represents the complete workflow containing all the Glue components present in the workflow and all the directed connections between them.
**/
export class WorkflowGraph extends SpeakeasyBase {
  @Metadata({ data: "json, name=Edges", elemType: shared.Edge })
  edges?: Edge[];

  @Metadata({ data: "json, name=Nodes", elemType: shared.Node })
  nodes?: Node[];
}
