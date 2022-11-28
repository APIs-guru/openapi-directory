import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingModeSummary } from "./billingmodesummary";
import { ReplicaGlobalSecondaryIndexSettingsDescription } from "./replicaglobalsecondaryindexsettingsdescription";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { ReplicaStatusEnum } from "./replicastatusenum";



// ReplicaSettingsDescription
/** 
 * Represents the properties of a replica.
**/
export class ReplicaSettingsDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaBillingModeSummary" })
  replicaBillingModeSummary?: BillingModeSummary;

  @SpeakeasyMetadata({ data: "json, name=ReplicaGlobalSecondaryIndexSettings", elemType: ReplicaGlobalSecondaryIndexSettingsDescription })
  replicaGlobalSecondaryIndexSettings?: ReplicaGlobalSecondaryIndexSettingsDescription[];

  @SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedReadCapacityAutoScalingSettings" })
  replicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedReadCapacityUnits" })
  replicaProvisionedReadCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedWriteCapacityAutoScalingSettings" })
  replicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @SpeakeasyMetadata({ data: "json, name=ReplicaProvisionedWriteCapacityUnits" })
  replicaProvisionedWriteCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=ReplicaStatus" })
  replicaStatus?: ReplicaStatusEnum;
}
