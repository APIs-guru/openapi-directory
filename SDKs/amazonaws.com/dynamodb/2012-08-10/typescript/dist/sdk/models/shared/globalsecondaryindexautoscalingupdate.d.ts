import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
/**
 * Represents the auto scaling settings of a global secondary index for a global table that will be modified.
**/
export declare class GlobalSecondaryIndexAutoScalingUpdate extends SpeakeasyBase {
    indexName?: string;
    provisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
