import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaGlobalSecondaryIndexAutoScalingUpdate } from "./replicaglobalsecondaryindexautoscalingupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
/**
 * Represents the auto scaling settings of a replica that will be modified.
**/
export declare class ReplicaAutoScalingUpdate extends SpeakeasyBase {
    regionName: string;
    replicaGlobalSecondaryIndexUpdates?: ReplicaGlobalSecondaryIndexAutoScalingUpdate[];
    replicaProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
}
