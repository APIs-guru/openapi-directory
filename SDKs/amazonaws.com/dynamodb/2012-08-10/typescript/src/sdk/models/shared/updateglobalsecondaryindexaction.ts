import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedThroughput } from "./provisionedthroughput";


// UpdateGlobalSecondaryIndexAction
/** 
 * Represents the new provisioned throughput settings to be applied to a global secondary index.
**/
export class UpdateGlobalSecondaryIndexAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName: string;

  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput: ProvisionedThroughput;
}
