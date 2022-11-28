import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTablesInput
/** 
 * Represents the input of a <code>ListTables</code> operation.
**/
export class ListTablesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartTableName" })
  exclusiveStartTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;
}
