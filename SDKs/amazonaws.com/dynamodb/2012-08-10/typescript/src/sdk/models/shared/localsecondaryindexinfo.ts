import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeySchemaElement } from "./keyschemaelement";
import { Projection } from "./projection";


// LocalSecondaryIndexInfo
/** 
 * Represents the properties of a local secondary index for the table when the backup was created.
**/
export class LocalSecondaryIndexInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=KeySchema", elemType: shared.KeySchemaElement })
  keySchema?: KeySchemaElement[];

  @Metadata({ data: "json, name=Projection" })
  projection?: Projection;
}
