import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogTarget
/** 
 * Specifies an Glue Data Catalog target.
**/
export class CatalogTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=Tables" })
  tables: string[];
}
