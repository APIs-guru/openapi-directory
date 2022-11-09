import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IndexStatusEnum } from "./indexstatusenum";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";


// ReplicaGlobalSecondaryIndexSettingsDescription
/** 
 * Represents the properties of a global secondary index.
**/
export class ReplicaGlobalSecondaryIndexSettingsDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName: string;

  @Metadata({ data: "json, name=IndexStatus" })
  indexStatus?: IndexStatusEnum;

  @Metadata({ data: "json, name=ProvisionedReadCapacityAutoScalingSettings" })
  provisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @Metadata({ data: "json, name=ProvisionedReadCapacityUnits" })
  provisionedReadCapacityUnits?: number;

  @Metadata({ data: "json, name=ProvisionedWriteCapacityAutoScalingSettings" })
  provisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @Metadata({ data: "json, name=ProvisionedWriteCapacityUnits" })
  provisionedWriteCapacityUnits?: number;
}
