import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalTableGlobalSecondaryIndexSettingsUpdate } from "./globaltableglobalsecondaryindexsettingsupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
import { ReplicaSettingsUpdate } from "./replicasettingsupdate";


export class UpdateGlobalTableSettingsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalTableBillingMode" })
  globalTableBillingMode?: BillingModeEnum;

  @Metadata({ data: "json, name=GlobalTableGlobalSecondaryIndexSettingsUpdate", elemType: shared.GlobalTableGlobalSecondaryIndexSettingsUpdate })
  globalTableGlobalSecondaryIndexSettingsUpdate?: GlobalTableGlobalSecondaryIndexSettingsUpdate[];

  @Metadata({ data: "json, name=GlobalTableName" })
  globalTableName: string;

  @Metadata({ data: "json, name=GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate" })
  globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  @Metadata({ data: "json, name=GlobalTableProvisionedWriteCapacityUnits" })
  globalTableProvisionedWriteCapacityUnits?: number;

  @Metadata({ data: "json, name=ReplicaSettingsUpdate", elemType: shared.ReplicaSettingsUpdate })
  replicaSettingsUpdate?: ReplicaSettingsUpdate[];
}
