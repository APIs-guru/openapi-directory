import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaGlobalSecondaryIndexSettingsUpdate } from "./replicaglobalsecondaryindexsettingsupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
/**
 * Represents the settings for a global table in a Region that will be modified.
**/
export declare class ReplicaSettingsUpdate extends SpeakeasyBase {
    regionName: string;
    replicaGlobalSecondaryIndexSettingsUpdate?: ReplicaGlobalSecondaryIndexSettingsUpdate[];
    replicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
    replicaProvisionedReadCapacityUnits?: number;
}
