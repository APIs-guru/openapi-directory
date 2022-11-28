import { SpeakeasyBase } from "../../../internal/utils";
import { IndexStatusEnum } from "./indexstatusenum";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
/**
 * Represents the auto scaling configuration for a replica global secondary index.
**/
export declare class ReplicaGlobalSecondaryIndexAutoScalingDescription extends SpeakeasyBase {
    indexName?: string;
    indexStatus?: IndexStatusEnum;
    provisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    provisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
}
