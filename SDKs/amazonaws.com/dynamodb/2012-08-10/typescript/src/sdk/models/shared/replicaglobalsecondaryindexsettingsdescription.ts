import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndexStatusEnum } from "./indexstatusenum";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";



// ReplicaGlobalSecondaryIndexSettingsDescription
/** 
 * Represents the properties of a global secondary index.
**/
export class ReplicaGlobalSecondaryIndexSettingsDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=IndexStatus" })
  indexStatus?: IndexStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedReadCapacityAutoScalingSettings" })
  provisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedReadCapacityUnits" })
  provisionedReadCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedWriteCapacityAutoScalingSettings" })
  provisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedWriteCapacityUnits" })
  provisionedWriteCapacityUnits?: number;
}
