import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";


// GlobalTableGlobalSecondaryIndexSettingsUpdate
/** 
 * Represents the settings of a global secondary index for a global table that will be modified.
**/
export class GlobalTableGlobalSecondaryIndexSettingsUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName: string;

  @Metadata({ data: "json, name=ProvisionedWriteCapacityAutoScalingSettingsUpdate" })
  provisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  @Metadata({ data: "json, name=ProvisionedWriteCapacityUnits" })
  provisionedWriteCapacityUnits?: number;
}
