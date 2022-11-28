import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthTokenUpdateStatusEnum } from "./authtokenupdatestatusenum";
import { PendingAutomaticFailoverStatusEnum } from "./pendingautomaticfailoverstatusenum";
import { PendingLogDeliveryConfiguration } from "./pendinglogdeliveryconfiguration";
import { ReshardingStatus } from "./reshardingstatus";
import { UserGroupsUpdateStatus } from "./usergroupsupdatestatus";



// ReplicationGroupPendingModifiedValues
/** 
 * The settings to be applied to the Redis replication group, either immediately or during the next maintenance window.
**/
export class ReplicationGroupPendingModifiedValues extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authTokenStatus?: AuthTokenUpdateStatusEnum;

  @SpeakeasyMetadata()
  automaticFailoverStatus?: PendingAutomaticFailoverStatusEnum;

  @SpeakeasyMetadata({ elemType: PendingLogDeliveryConfiguration })
  logDeliveryConfigurations?: PendingLogDeliveryConfiguration[];

  @SpeakeasyMetadata()
  primaryClusterId?: string;

  @SpeakeasyMetadata()
  resharding?: ReshardingStatus;

  @SpeakeasyMetadata()
  userGroups?: UserGroupsUpdateStatus;
}
