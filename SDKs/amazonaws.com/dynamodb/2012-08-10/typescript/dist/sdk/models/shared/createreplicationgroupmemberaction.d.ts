import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaGlobalSecondaryIndex } from "./replicaglobalsecondaryindex";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";
/**
 * Represents a replica to be created.
**/
export declare class CreateReplicationGroupMemberAction extends SpeakeasyBase {
    globalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];
    kmsMasterKeyId?: string;
    provisionedThroughputOverride?: ProvisionedThroughputOverride;
    regionName: string;
}
