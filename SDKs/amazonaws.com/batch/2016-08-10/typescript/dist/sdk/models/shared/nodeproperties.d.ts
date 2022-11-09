import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NodeRangeProperty } from "./noderangeproperty";
/**
 * An object representing the node properties of a multi-node parallel job.
**/
export declare class NodeProperties extends SpeakeasyBase {
    mainNode: number;
    nodeRangeProperties: NodeRangeProperty[];
    numNodes: number;
}
