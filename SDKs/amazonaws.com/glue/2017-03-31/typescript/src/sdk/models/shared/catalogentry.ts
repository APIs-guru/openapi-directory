import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CatalogEntry
/** 
 * Specifies a table definition in the Glue Data Catalog.
**/
export class CatalogEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
