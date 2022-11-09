import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An object representing the properties of a node that's associated with a multi-node parallel job.
**/
export declare class NodePropertiesSummary extends SpeakeasyBase {
    isMainNode?: boolean;
    nodeIndex?: number;
    numNodes?: number;
}
