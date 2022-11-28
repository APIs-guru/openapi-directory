import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";



// LocalSecondaryIndex
/** 
 * Represents the properties of a local secondary index.
**/
export class LocalSecondaryIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: KeySchemaElement })
  keySchema: KeySchemaElement[];

  @SpeakeasyMetadata({ data: "json, name=Projection" })
  projection: Projection;
}
