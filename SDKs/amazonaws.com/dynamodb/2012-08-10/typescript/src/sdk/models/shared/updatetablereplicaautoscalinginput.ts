import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalSecondaryIndexAutoScalingUpdate } from "./globalsecondaryindexautoscalingupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
import { ReplicaAutoScalingUpdate } from "./replicaautoscalingupdate";


export class UpdateTableReplicaAutoScalingInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalSecondaryIndexUpdates", elemType: shared.GlobalSecondaryIndexAutoScalingUpdate })
  globalSecondaryIndexUpdates?: GlobalSecondaryIndexAutoScalingUpdate[];

  @Metadata({ data: "json, name=ProvisionedWriteCapacityAutoScalingUpdate" })
  provisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;

  @Metadata({ data: "json, name=ReplicaUpdates", elemType: shared.ReplicaAutoScalingUpdate })
  replicaUpdates?: ReplicaAutoScalingUpdate[];

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
