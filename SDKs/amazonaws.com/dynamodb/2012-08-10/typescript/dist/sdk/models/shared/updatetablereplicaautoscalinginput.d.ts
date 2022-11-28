import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalSecondaryIndexAutoScalingUpdate } from "./globalsecondaryindexautoscalingupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
import { ReplicaAutoScalingUpdate } from "./replicaautoscalingupdate";
export declare class UpdateTableReplicaAutoScalingInput extends SpeakeasyBase {
    globalSecondaryIndexUpdates?: GlobalSecondaryIndexAutoScalingUpdate[];
    provisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
    replicaUpdates?: ReplicaAutoScalingUpdate[];
    tableName: string;
}
