import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerProperties } from "./containerproperties";
/**
 * An object representing the properties of the node range for a multi-node parallel job.
**/
export declare class NodeRangeProperty extends SpeakeasyBase {
    container?: ContainerProperties;
    targetNodes: string;
}
