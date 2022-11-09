import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";


// GlobalSecondaryIndexAutoScalingUpdate
/** 
 * Represents the auto scaling settings of a global secondary index for a global table that will be modified.
**/
export class GlobalSecondaryIndexAutoScalingUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=ProvisionedWriteCapacityAutoScalingUpdate" })
  provisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
