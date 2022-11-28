import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
/**
 * Represents the settings of a global secondary index for a global table that will be modified.
**/
export declare class ReplicaGlobalSecondaryIndexSettingsUpdate extends SpeakeasyBase {
    indexName: string;
    provisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
    provisionedReadCapacityUnits?: number;
}
