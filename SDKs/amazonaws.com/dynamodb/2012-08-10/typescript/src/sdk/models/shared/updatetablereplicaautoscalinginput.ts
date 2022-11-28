import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalSecondaryIndexAutoScalingUpdate } from "./globalsecondaryindexautoscalingupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
import { ReplicaAutoScalingUpdate } from "./replicaautoscalingupdate";



export class UpdateTableReplicaAutoScalingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexUpdates", elemType: GlobalSecondaryIndexAutoScalingUpdate })
  globalSecondaryIndexUpdates?: GlobalSecondaryIndexAutoScalingUpdate[];

  @SpeakeasyMetadata({ data: "json, name=ProvisionedWriteCapacityAutoScalingUpdate" })
  provisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;

  @SpeakeasyMetadata({ data: "json, name=ReplicaUpdates", elemType: ReplicaAutoScalingUpdate })
  replicaUpdates?: ReplicaAutoScalingUpdate[];

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
