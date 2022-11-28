import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";



// LocalSecondaryIndexDescription
/** 
 * Represents the properties of a local secondary index.
**/
export class LocalSecondaryIndexDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexArn" })
  indexArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexSizeBytes" })
  indexSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=ItemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: KeySchemaElement })
  keySchema?: KeySchemaElement[];

  @SpeakeasyMetadata({ data: "json, name=Projection" })
  projection?: Projection;
}
