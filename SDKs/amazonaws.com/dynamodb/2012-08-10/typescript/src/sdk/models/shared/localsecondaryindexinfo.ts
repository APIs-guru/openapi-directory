import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";



// LocalSecondaryIndexInfo
/** 
 * Represents the properties of a local secondary index for the table when the backup was created.
**/
export class LocalSecondaryIndexInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: KeySchemaElement })
  keySchema?: KeySchemaElement[];

  @SpeakeasyMetadata({ data: "json, name=Projection" })
  projection?: Projection;
}
