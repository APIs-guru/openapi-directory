import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaGlobalSecondaryIndexDescription } from "./replicaglobalsecondaryindexdescription";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";
import { ReplicaStatusEnum } from "./replicastatusenum";


// ReplicaDescription
/** 
 * Contains the details of the replica.
**/
export class ReplicaDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalSecondaryIndexes", elemType: shared.ReplicaGlobalSecondaryIndexDescription })
  globalSecondaryIndexes?: ReplicaGlobalSecondaryIndexDescription[];

  @Metadata({ data: "json, name=KMSMasterKeyId" })
  kmsMasterKeyId?: string;

  @Metadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: ProvisionedThroughputOverride;

  @Metadata({ data: "json, name=RegionName" })
  regionName?: string;

  @Metadata({ data: "json, name=ReplicaInaccessibleDateTime" })
  replicaInaccessibleDateTime?: Date;

  @Metadata({ data: "json, name=ReplicaStatus" })
  replicaStatus?: ReplicaStatusEnum;

  @Metadata({ data: "json, name=ReplicaStatusDescription" })
  replicaStatusDescription?: string;

  @Metadata({ data: "json, name=ReplicaStatusPercentProgress" })
  replicaStatusPercentProgress?: string;
}
