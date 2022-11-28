import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaGlobalSecondaryIndexAutoScalingDescription } from "./replicaglobalsecondaryindexautoscalingdescription";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { ReplicaStatusEnum } from "./replicastatusenum";



// ReplicaAutoScalingDescription
/** 
 * Represents the auto scaling settings of the replica.
**/
export class ReplicaAutoScalingDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: ReplicaGlobalSecondaryIndexAutoScalingDescription })
  globalSecondaryIndexes?: ReplicaGlobalSecondaryIndexAutoScalingDescription[];

  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedReadCapacityAutoScalingSettings" })
  replicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedWriteCapacityAutoScalingSettings" })
  replicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @SpeakeasyMetadata({ data: "json, name=ReplicaStatus" })
  replicaStatus?: ReplicaStatusEnum;
}
