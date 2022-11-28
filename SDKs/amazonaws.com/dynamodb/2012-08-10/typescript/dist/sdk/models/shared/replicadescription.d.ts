import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaGlobalSecondaryIndexDescription } from "./replicaglobalsecondaryindexdescription";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";
import { ReplicaStatusEnum } from "./replicastatusenum";
/**
 * Contains the details of the replica.
**/
export declare class ReplicaDescription extends SpeakeasyBase {
    globalSecondaryIndexes?: ReplicaGlobalSecondaryIndexDescription[];
    kmsMasterKeyId?: string;
    provisionedThroughputOverride?: ProvisionedThroughputOverride;
    regionName?: string;
    replicaInaccessibleDateTime?: Date;
    replicaStatus?: ReplicaStatusEnum;
    replicaStatusDescription?: string;
    replicaStatusPercentProgress?: string;
}
