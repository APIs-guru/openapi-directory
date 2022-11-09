import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlueTable
/** 
 * The database and table in the Glue Data Catalog that is used for input or output data.
**/
export class GlueTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
