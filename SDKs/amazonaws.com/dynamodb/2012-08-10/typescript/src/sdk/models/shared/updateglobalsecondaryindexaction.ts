import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedThroughput } from "./provisionedthroughput";



// UpdateGlobalSecondaryIndexAction
/** 
 * Represents the new provisioned throughput settings to be applied to a global secondary index.
**/
export class UpdateGlobalSecondaryIndexAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput: ProvisionedThroughput;
}
