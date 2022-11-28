import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeGroupMemberUpdateStatus } from "./nodegroupmemberupdatestatus";



// NodeGroupUpdateStatus
/** 
 * The status of the service update on the node group 
**/
export class NodeGroupUpdateStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nodeGroupId?: string;

  @SpeakeasyMetadata({ elemType: NodeGroupMemberUpdateStatus })
  nodeGroupMemberUpdateStatus?: NodeGroupMemberUpdateStatus[];
}
