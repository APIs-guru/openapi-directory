import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";


// ReplicaGlobalSecondaryIndexDescription
/** 
 * Represents the properties of a replica global secondary index.
**/
export class ReplicaGlobalSecondaryIndexDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: ProvisionedThroughputOverride;
}
