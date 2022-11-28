import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaGlobalSecondaryIndex } from "./replicaglobalsecondaryindex";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";



// UpdateReplicationGroupMemberAction
/** 
 * Represents a replica to be modified.
**/
export class UpdateReplicationGroupMemberAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: ReplicaGlobalSecondaryIndex })
  globalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];

  @SpeakeasyMetadata({ data: "json, name=KMSMasterKeyId" })
  kmsMasterKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: ProvisionedThroughputOverride;

  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName: string;
}
