import { SpeakeasyBase } from "../../../internal/utils";
import { NodeGroupMember } from "./nodegroupmember";
import { Endpoint } from "./endpoint";
/**
 * Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
**/
export declare class NodeGroup extends SpeakeasyBase {
    nodeGroupId?: string;
    nodeGroupMembers?: NodeGroupMember[];
    primaryEndpoint?: Endpoint;
    readerEndpoint?: Endpoint;
    slots?: string;
    status?: string;
}
