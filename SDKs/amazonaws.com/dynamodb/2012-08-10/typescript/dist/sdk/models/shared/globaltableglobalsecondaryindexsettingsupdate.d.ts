import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
/**
 * Represents the settings of a global secondary index for a global table that will be modified.
**/
export declare class GlobalTableGlobalSecondaryIndexSettingsUpdate extends SpeakeasyBase {
    indexName: string;
    provisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
    provisionedWriteCapacityUnits?: number;
}
