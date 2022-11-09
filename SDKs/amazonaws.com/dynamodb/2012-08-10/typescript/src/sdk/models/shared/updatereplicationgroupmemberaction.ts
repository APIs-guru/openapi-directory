import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaGlobalSecondaryIndex } from "./replicaglobalsecondaryindex";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";


// UpdateReplicationGroupMemberAction
/** 
 * Represents a replica to be modified.
**/
export class UpdateReplicationGroupMemberAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalSecondaryIndexes", elemType: shared.ReplicaGlobalSecondaryIndex })
  globalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];

  @Metadata({ data: "json, name=KMSMasterKeyId" })
  kmsMasterKeyId?: string;

  @Metadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: ProvisionedThroughputOverride;

  @Metadata({ data: "json, name=RegionName" })
  regionName: string;
}
