import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTablesOutput
/** 
 * Represents the output of a <code>ListTables</code> operation.
**/
export class ListTablesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastEvaluatedTableName" })
  lastEvaluatedTableName?: string;

  @Metadata({ data: "json, name=TableNames" })
  tableNames?: string[];
}
