import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaGlobalSecondaryIndexAutoScalingUpdate } from "./replicaglobalsecondaryindexautoscalingupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";



// ReplicaAutoScalingUpdate
/** 
 * Represents the auto scaling settings of a replica that will be modified.
**/
export class ReplicaAutoScalingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaGlobalSecondaryIndexUpdates", elemType: ReplicaGlobalSecondaryIndexAutoScalingUpdate })
  replicaGlobalSecondaryIndexUpdates?: ReplicaGlobalSecondaryIndexAutoScalingUpdate[];

  @SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedReadCapacityAutoScalingUpdate" })
  replicaProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
