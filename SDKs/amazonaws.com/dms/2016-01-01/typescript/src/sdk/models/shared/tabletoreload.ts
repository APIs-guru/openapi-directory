import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableToReload
/** 
 * Provides the name of the schema and table to be reloaded.
**/
export class TableToReload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaName" })
  schemaName: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
