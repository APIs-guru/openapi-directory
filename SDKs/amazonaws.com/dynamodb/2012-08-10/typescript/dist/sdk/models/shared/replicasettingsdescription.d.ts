import { SpeakeasyBase } from "../../../internal/utils";
import { BillingModeSummary } from "./billingmodesummary";
import { ReplicaGlobalSecondaryIndexSettingsDescription } from "./replicaglobalsecondaryindexsettingsdescription";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { ReplicaStatusEnum } from "./replicastatusenum";
/**
 * Represents the properties of a replica.
**/
export declare class ReplicaSettingsDescription extends SpeakeasyBase {
    regionName: string;
    replicaBillingModeSummary?: BillingModeSummary;
    replicaGlobalSecondaryIndexSettings?: ReplicaGlobalSecondaryIndexSettingsDescription[];
    replicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    replicaProvisionedReadCapacityUnits?: number;
    replicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    replicaProvisionedWriteCapacityUnits?: number;
    replicaStatus?: ReplicaStatusEnum;
}
