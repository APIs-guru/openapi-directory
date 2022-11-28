import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";



// GlobalTableGlobalSecondaryIndexSettingsUpdate
/** 
 * Represents the settings of a global secondary index for a global table that will be modified.
**/
export class GlobalTableGlobalSecondaryIndexSettingsUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedWriteCapacityAutoScalingSettingsUpdate" })
  provisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedWriteCapacityUnits" })
  provisionedWriteCapacityUnits?: number;
}
