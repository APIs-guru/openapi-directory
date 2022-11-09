import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogEntry
/** 
 * Specifies a table definition in the Glue Data Catalog.
**/
export class CatalogEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
