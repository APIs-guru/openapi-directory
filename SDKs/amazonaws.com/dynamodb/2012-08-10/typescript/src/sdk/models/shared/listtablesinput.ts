import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTablesInput
/** 
 * Represents the input of a <code>ListTables</code> operation.
**/
export class ListTablesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExclusiveStartTableName" })
  exclusiveStartTableName?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;
}
