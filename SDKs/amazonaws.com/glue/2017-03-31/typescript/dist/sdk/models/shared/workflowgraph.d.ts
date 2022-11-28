import { SpeakeasyBase } from "../../../internal/utils";
import { Edge } from "./edge";
import { Node } from "./node";
/**
 * A workflow graph represents the complete workflow containing all the Glue components present in the workflow and all the directed connections between them.
**/
export declare class WorkflowGraph extends SpeakeasyBase {
    edges?: Edge[];
    nodes?: Node[];
}
