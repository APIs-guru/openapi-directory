import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TableToReload
/** 
 * Provides the name of the schema and table to be reloaded.
**/
export class TableToReload extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaName" })
  schemaName: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
