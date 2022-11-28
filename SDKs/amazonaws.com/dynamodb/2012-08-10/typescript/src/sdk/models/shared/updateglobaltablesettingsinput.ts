import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalTableGlobalSecondaryIndexSettingsUpdate } from "./globaltableglobalsecondaryindexsettingsupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
import { ReplicaSettingsUpdate } from "./replicasettingsupdate";



export class UpdateGlobalTableSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalTableBillingMode" })
  globalTableBillingMode?: BillingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=GlobalTableGlobalSecondaryIndexSettingsUpdate", elemType: GlobalTableGlobalSecondaryIndexSettingsUpdate })
  globalTableGlobalSecondaryIndexSettingsUpdate?: GlobalTableGlobalSecondaryIndexSettingsUpdate[];

  @SpeakeasyMetadata({ data: "json, name=GlobalTableName" })
  globalTableName: string;

  @SpeakeasyMetadata({ data: "json, name=GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate" })
  globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;

  @SpeakeasyMetadata({ data: "json, name=GlobalTableProvisionedWriteCapacityUnits" })
  globalTableProvisionedWriteCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=ReplicaSettingsUpdate", elemType: ReplicaSettingsUpdate })
  replicaSettingsUpdate?: ReplicaSettingsUpdate[];
}
