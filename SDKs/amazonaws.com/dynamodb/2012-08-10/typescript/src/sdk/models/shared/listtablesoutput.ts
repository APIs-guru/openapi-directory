import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTablesOutput
/** 
 * Represents the output of a <code>ListTables</code> operation.
**/
export class ListTablesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastEvaluatedTableName" })
  lastEvaluatedTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableNames" })
  tableNames?: string[];
}
