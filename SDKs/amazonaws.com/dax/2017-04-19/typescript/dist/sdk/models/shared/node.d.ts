import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Endpoint } from "./endpoint";
/**
 * Represents an individual node within a DAX cluster.
**/
export declare class Node extends SpeakeasyBase {
    availabilityZone?: string;
    endpoint?: Endpoint;
    nodeCreateTime?: Date;
    nodeId?: string;
    nodeStatus?: string;
    parameterGroupStatus?: string;
}
