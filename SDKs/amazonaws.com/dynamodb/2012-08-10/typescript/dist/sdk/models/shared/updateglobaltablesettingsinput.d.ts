import { SpeakeasyBase } from "../../../internal/utils";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalTableGlobalSecondaryIndexSettingsUpdate } from "./globaltableglobalsecondaryindexsettingsupdate";
import { AutoScalingSettingsUpdate } from "./autoscalingsettingsupdate";
import { ReplicaSettingsUpdate } from "./replicasettingsupdate";
export declare class UpdateGlobalTableSettingsInput extends SpeakeasyBase {
    globalTableBillingMode?: BillingModeEnum;
    globalTableGlobalSecondaryIndexSettingsUpdate?: GlobalTableGlobalSecondaryIndexSettingsUpdate[];
    globalTableName: string;
    globalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
    globalTableProvisionedWriteCapacityUnits?: number;
    replicaSettingsUpdate?: ReplicaSettingsUpdate[];
}
