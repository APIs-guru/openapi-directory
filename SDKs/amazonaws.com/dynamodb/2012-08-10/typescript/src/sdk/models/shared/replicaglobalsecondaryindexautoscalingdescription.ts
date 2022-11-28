import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexStatusEnum } from "./indexstatusenum";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";



// ReplicaGlobalSecondaryIndexAutoScalingDescription
/** 
 * Represents the auto scaling configuration for a replica global secondary index.
**/
export class ReplicaGlobalSecondaryIndexAutoScalingDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexStatus" })
  indexStatus?: IndexStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedReadCapacityAutoScalingSettings" })
  provisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedWriteCapacityAutoScalingSettings" })
  provisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
}
