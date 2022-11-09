import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";


// ReplicaGlobalSecondaryIndexAutoScalingUpdate
/** 
 * Represents the auto scaling settings of a global secondary index for a replica that will be modified.
**/
export class ReplicaGlobalSecondaryIndexAutoScalingUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=ProvisionedReadCapacityAutoScalingUpdate" })
  provisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
