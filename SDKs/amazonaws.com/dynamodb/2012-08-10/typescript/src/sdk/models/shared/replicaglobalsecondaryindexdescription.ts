import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";



// ReplicaGlobalSecondaryIndexDescription
/** 
 * Represents the properties of a replica global secondary index.
**/
export class ReplicaGlobalSecondaryIndexDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputOverride" })
  provisionedThroughputOverride?: ProvisionedThroughputOverride;
}
