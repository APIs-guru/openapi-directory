import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticFailoverStatusEnum } from "./automaticfailoverstatusenum";
/**
 * A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group.
**/
export declare class GlobalReplicationGroupMember extends SpeakeasyBase {
    automaticFailover?: AutomaticFailoverStatusEnum;
    replicationGroupId?: string;
    replicationGroupRegion?: string;
    role?: string;
    status?: string;
}
