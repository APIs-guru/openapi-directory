import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaGlobalSecondaryIndexAutoScalingDescription } from "./replicaglobalsecondaryindexautoscalingdescription";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { ReplicaStatusEnum } from "./replicastatusenum";
/**
 * Represents the auto scaling settings of the replica.
**/
export declare class ReplicaAutoScalingDescription extends SpeakeasyBase {
    globalSecondaryIndexes?: ReplicaGlobalSecondaryIndexAutoScalingDescription[];
    regionName?: string;
    replicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    replicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    replicaStatus?: ReplicaStatusEnum;
}
