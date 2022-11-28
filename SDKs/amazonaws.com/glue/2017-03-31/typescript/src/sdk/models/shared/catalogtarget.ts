import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CatalogTarget
/** 
 * Specifies an Glue Data Catalog target.
**/
export class CatalogTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=Tables" })
  tables: string[];
}
