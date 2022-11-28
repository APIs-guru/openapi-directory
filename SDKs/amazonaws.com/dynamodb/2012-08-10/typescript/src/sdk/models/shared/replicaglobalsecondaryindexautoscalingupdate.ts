import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";



// ReplicaGlobalSecondaryIndexAutoScalingUpdate
/** 
 * Represents the auto scaling settings of a global secondary index for a replica that will be modified.
**/
export class ReplicaGlobalSecondaryIndexAutoScalingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedReadCapacityAutoScalingUpdate" })
  provisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
