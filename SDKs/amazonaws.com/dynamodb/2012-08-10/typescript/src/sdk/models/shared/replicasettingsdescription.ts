import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillingModeSummary } from "./billingmodesummary";
import { ReplicaGlobalSecondaryIndexSettingsDescription } from "./replicaglobalsecondaryindexsettingsdescription";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { AutoScalingSettingsDescription } from "./autoscalingsettingsdescription";
import { ReplicaStatusEnum } from "./replicastatusenum";


// ReplicaSettingsDescription
/** 
 * Represents the properties of a replica.
**/
export class ReplicaSettingsDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegionName" })
  regionName: string;

  @Metadata({ data: "json, name=ReplicaBillingModeSummary" })
  replicaBillingModeSummary?: BillingModeSummary;

  @Metadata({ data: "json, name=ReplicaGlobalSecondaryIndexSettings", elemType: shared.ReplicaGlobalSecondaryIndexSettingsDescription })
  replicaGlobalSecondaryIndexSettings?: ReplicaGlobalSecondaryIndexSettingsDescription[];

  @Metadata({ data: "json, name=ReplicaProvisionedReadCapacityAutoScalingSettings" })
  replicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @Metadata({ data: "json, name=ReplicaProvisionedReadCapacityUnits" })
  replicaProvisionedReadCapacityUnits?: number;

  @Metadata({ data: "json, name=ReplicaProvisionedWriteCapacityAutoScalingSettings" })
  replicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;

  @Metadata({ data: "json, name=ReplicaProvisionedWriteCapacityUnits" })
  replicaProvisionedWriteCapacityUnits?: number;

  @Metadata({ data: "json, name=ReplicaStatus" })
  replicaStatus?: ReplicaStatusEnum;
}
