import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaGlobalSecondaryIndexSettingsUpdate } from "./replicaglobalsecondaryindexsettingsupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";



// ReplicaSettingsUpdate
/** 
 * Represents the settings for a global table in a Region that will be modified.
**/
export class ReplicaSettingsUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaGlobalSecondaryIndexSettingsUpdate", elemType: ReplicaGlobalSecondaryIndexSettingsUpdate })
  replicaGlobalSecondaryIndexSettingsUpdate?: ReplicaGlobalSecondaryIndexSettingsUpdate[];

  @SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate" })
  replicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  @SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedReadCapacityUnits" })
  replicaProvisionedReadCapacityUnits?: number;
}
