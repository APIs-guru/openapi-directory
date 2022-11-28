import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeGroupMember } from "./nodegroupmember";
import { Endpoint } from "./endpoint";



// NodeGroup
/** 
 * Represents a collection of cache nodes in a replication group. One node in the node group is the read/write primary node. All the other nodes are read-only Replica nodes.
**/
export class NodeGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nodeGroupId?: string;

  @SpeakeasyMetadata({ elemType: NodeGroupMember })
  nodeGroupMembers?: NodeGroupMember[];

  @SpeakeasyMetadata()
  primaryEndpoint?: Endpoint;

  @SpeakeasyMetadata()
  readerEndpoint?: Endpoint;

  @SpeakeasyMetadata()
  slots?: string;

  @SpeakeasyMetadata()
  status?: string;
}
