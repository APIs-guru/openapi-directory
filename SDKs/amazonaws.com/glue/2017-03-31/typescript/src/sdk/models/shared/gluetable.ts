import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlueTable
/** 
 * The database and table in the Glue Data Catalog that is used for input or output data.
**/
export class GlueTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
