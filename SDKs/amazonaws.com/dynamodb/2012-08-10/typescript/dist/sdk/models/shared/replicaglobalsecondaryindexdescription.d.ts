import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";
/**
 * Represents the properties of a replica global secondary index.
**/
export declare class ReplicaGlobalSecondaryIndexDescription extends SpeakeasyBase {
    indexName?: string;
    provisionedThroughputOverride?: ProvisionedThroughputOverride;
}
