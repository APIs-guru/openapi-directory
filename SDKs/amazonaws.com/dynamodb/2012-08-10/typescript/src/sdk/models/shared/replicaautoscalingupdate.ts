import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaGlobalSecondaryIndexAutoScalingUpdate } from "./replicaglobalsecondaryindexautoscalingupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";


// ReplicaAutoScalingUpdate
/** 
 * Represents the auto scaling settings of a replica that will be modified.
**/
export class ReplicaAutoScalingUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegionName" })
  regionName: string;

  @Metadata({ data: "json, name=ReplicaGlobalSecondaryIndexUpdates", elemType: shared.ReplicaGlobalSecondaryIndexAutoScalingUpdate })
  replicaGlobalSecondaryIndexUpdates?: ReplicaGlobalSecondaryIndexAutoScalingUpdate[];

  @Metadata({ data: "json, name=ReplicaProvisionedReadCapacityAutoScalingUpdate" })
  replicaProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
