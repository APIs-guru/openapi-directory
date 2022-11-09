import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IndexStatusEnum } from "./indexstatusenum";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";


// ReplicaGlobalSecondaryIndexAutoScalingDescription
/** 
 * Represents the auto scaling configuration for a replica global secondary index.
**/
export class ReplicaGlobalSecondaryIndexAutoScalingDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=IndexStatus" })
  indexStatus?: IndexStatusEnum;

  @Metadata({ data: "json, name=ProvisionedReadCapacityAutoScalingSettings" })
  provisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @Metadata({ data: "json, name=ProvisionedWriteCapacityAutoScalingSettings" })
  provisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
}
