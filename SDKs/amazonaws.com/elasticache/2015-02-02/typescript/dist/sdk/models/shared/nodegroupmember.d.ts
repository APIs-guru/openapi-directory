import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
/**
 * Represents a single node within a node group (shard).
**/
export declare class NodeGroupMember extends SpeakeasyBase {
    cacheClusterId?: string;
    cacheNodeId?: string;
    currentRole?: string;
    preferredAvailabilityZone?: string;
    preferredOutpostArn?: string;
    readEndpoint?: Endpoint;
}
