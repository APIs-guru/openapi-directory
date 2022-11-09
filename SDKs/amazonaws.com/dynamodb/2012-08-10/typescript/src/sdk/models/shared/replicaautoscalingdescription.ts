import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaGlobalSecondaryIndexAutoScalingDescription } from "./replicaglobalsecondaryindexautoscalingdescription";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { ReplicaStatusEnum } from "./replicastatusenum";


// ReplicaAutoScalingDescription
/** 
 * Represents the auto scaling settings of the replica.
**/
export class ReplicaAutoScalingDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalSecondaryIndexes", elemType: shared.ReplicaGlobalSecondaryIndexAutoScalingDescription })
  globalSecondaryIndexes?: ReplicaGlobalSecondaryIndexAutoScalingDescription[];

  @Metadata({ data: "json, name=RegionName" })
  regionName?: string;

  @Metadata({ data: "json, name=ReplicaProvisionedReadCapacityAutoScalingSettings" })
  replicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @Metadata({ data: "json, name=ReplicaProvisionedWriteCapacityAutoScalingSettings" })
  replicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @Metadata({ data: "json, name=ReplicaStatus" })
  replicaStatus?: ReplicaStatusEnum;
}
