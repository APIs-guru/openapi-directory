import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";



// GlobalSecondaryIndexAutoScalingUpdate
/** 
 * Represents the auto scaling settings of a global secondary index for a global table that will be modified.
**/
export class GlobalSecondaryIndexAutoScalingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedWriteCapacityAutoScalingUpdate" })
  provisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
