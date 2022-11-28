import { SpeakeasyBase } from "../../../internal/utils";
import { AuthTokenUpdateStatusEnum } from "./authtokenupdatestatusenum";
import { PendingAutomaticFailoverStatusEnum } from "./pendingautomaticfailoverstatusenum";
import { PendingLogDeliveryConfiguration } from "./pendinglogdeliveryconfiguration";
import { ReshardingStatus } from "./reshardingstatus";
import { UserGroupsUpdateStatus } from "./usergroupsupdatestatus";
/**
 * The settings to be applied to the Redis replication group, either immediately or during the next maintenance window.
**/
export declare class ReplicationGroupPendingModifiedValues extends SpeakeasyBase {
    authTokenStatus?: AuthTokenUpdateStatusEnum;
    automaticFailoverStatus?: PendingAutomaticFailoverStatusEnum;
    logDeliveryConfigurations?: PendingLogDeliveryConfiguration[];
    primaryClusterId?: string;
    resharding?: ReshardingStatus;
    userGroups?: UserGroupsUpdateStatus;
}
