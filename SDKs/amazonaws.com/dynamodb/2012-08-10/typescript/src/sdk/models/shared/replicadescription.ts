import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaGlobalSecondaryIndexDescription } from "./replicaglobalsecondaryindexdescription";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";
import { ReplicaStatusEnum } from "./replicastatusenum";



// ReplicaDescription
/** 
 * Contains the details of the replica.
**/
export class ReplicaDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: ReplicaGlobalSecondaryIndexDescription })
  globalSecondaryIndexes?: ReplicaGlobalSecondaryIndexDescription[];

  @SpeakeasyMetadata({ data: "json, name=KMSMasterKeyId" })
  kmsMasterKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: ProvisionedThroughputOverride;

  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaInaccessibleDateTime" })
  replicaInaccessibleDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReplicaStatus" })
  replicaStatus?: ReplicaStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ReplicaStatusDescription" })
  replicaStatusDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicaStatusPercentProgress" })
  replicaStatusPercentProgress?: string;
}
