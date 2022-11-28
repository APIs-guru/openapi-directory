import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaGlobalSecondaryIndex } from "./replicaglobalsecondaryindex";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";



// CreateReplicationGroupMemberAction
/** 
 * Represents a replica to be created.
**/
export class CreateReplicationGroupMemberAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: ReplicaGlobalSecondaryIndex })
  globalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];

  @SpeakeasyMetadata({ data: "json, name=KMSMasterKeyId" })
  kmsMasterKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: ProvisionedThroughputOverride;

  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName: string;
}
