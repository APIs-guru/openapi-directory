import { SpeakeasyBase } from "../../../internal/utils";
import { NodeGroupMemberUpdateStatus } from "./nodegroupmemberupdatestatus";
/**
 * The status of the service update on the node group
**/
export declare class NodeGroupUpdateStatus extends SpeakeasyBase {
    nodeGroupId?: string;
    nodeGroupMemberUpdateStatus?: NodeGroupMemberUpdateStatus[];
}
