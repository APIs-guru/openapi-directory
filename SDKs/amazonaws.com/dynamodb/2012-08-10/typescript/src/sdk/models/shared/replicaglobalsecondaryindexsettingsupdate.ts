import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";



// ReplicaGlobalSecondaryIndexSettingsUpdate
/** 
 * Represents the settings of a global secondary index for a global table that will be modified.
**/
export class ReplicaGlobalSecondaryIndexSettingsUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedReadCapacityAutoScalingSettingsUpdate" })
  provisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedReadCapacityUnits" })
  provisionedReadCapacityUnits?: number;
}
