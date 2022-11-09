import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaGlobalSecondaryIndex } from "./replicaglobalsecondaryindex";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";


// CreateReplicationGroupMemberAction
/** 
 * Represents a replica to be created.
**/
export class CreateReplicationGroupMemberAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalSecondaryIndexes", elemType: shared.ReplicaGlobalSecondaryIndex })
  globalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];

  @Metadata({ data: "json, name=KMSMasterKeyId" })
  kmsMasterKeyId?: string;

  @Metadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: ProvisionedThroughputOverride;

  @Metadata({ data: "json, name=RegionName" })
  regionName: string;
}
