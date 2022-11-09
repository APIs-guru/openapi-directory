import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaGlobalSecondaryIndexSettingsUpdate } from "./replicaglobalsecondaryindexsettingsupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";


// ReplicaSettingsUpdate
/** 
 * Represents the settings for a global table in a Region that will be modified.
**/
export class ReplicaSettingsUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegionName" })
  regionName: string;

  @Metadata({ data: "json, name=ReplicaGlobalSecondaryIndexSettingsUpdate", elemType: shared.ReplicaGlobalSecondaryIndexSettingsUpdate })
  replicaGlobalSecondaryIndexSettingsUpdate?: ReplicaGlobalSecondaryIndexSettingsUpdate[];

  @Metadata({ data: "json, name=ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate" })
  replicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  @Metadata({ data: "json, name=ReplicaProvisionedReadCapacityUnits" })
  replicaProvisionedReadCapacityUnits?: number;
}
