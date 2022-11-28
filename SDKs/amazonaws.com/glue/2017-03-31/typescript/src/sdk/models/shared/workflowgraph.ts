import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Edge } from "./edge";
import { Node } from "./node";



// WorkflowGraph
/** 
 * A workflow graph represents the complete workflow containing all the Glue components present in the workflow and all the directed connections between them.
**/
export class WorkflowGraph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Edges", elemType: Edge })
  edges?: Edge[];

  @SpeakeasyMetadata({ data: "json, name=Nodes", elemType: Node })
  nodes?: Node[];
}
