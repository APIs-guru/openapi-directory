import { SpeakeasyBase } from "../../../internal/utils";
import { NodeUpdateInitiatedByEnum } from "./nodeupdateinitiatedbyenum";
import { NodeUpdateStatusEnum } from "./nodeupdatestatusenum";
/**
 * The status of the service update on the node group member
**/
export declare class NodeGroupMemberUpdateStatus extends SpeakeasyBase {
    cacheClusterId?: string;
    cacheNodeId?: string;
    nodeDeletionDate?: Date;
    nodeUpdateEndDate?: Date;
    nodeUpdateInitiatedBy?: NodeUpdateInitiatedByEnum;
    nodeUpdateInitiatedDate?: Date;
    nodeUpdateStartDate?: Date;
    nodeUpdateStatus?: NodeUpdateStatusEnum;
    nodeUpdateStatusModifiedDate?: Date;
}
