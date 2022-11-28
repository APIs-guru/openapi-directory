import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";
import { ProvisionedThroughput } from "./provisionedthroughput";



// GlobalSecondaryIndex
/** 
 * Represents the properties of a global secondary index.
**/
export class GlobalSecondaryIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: KeySchemaElement })
  keySchema: KeySchemaElement[];

  @SpeakeasyMetadata({ data: "json, name=Projection" })
  projection: Projection;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput?: ProvisionedThroughput;
}
