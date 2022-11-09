import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";


// LocalSecondaryIndex
/** 
 * Represents the properties of a local secondary index.
**/
export class LocalSecondaryIndex extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName: string;

  @Metadata({ data: "json, name=KeySchema", elemType: shared.KeySchemaElement })
  keySchema: KeySchemaElement[];

  @Metadata({ data: "json, name=Projection" })
  projection: Projection;
}
