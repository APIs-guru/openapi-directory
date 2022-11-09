import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportDataSourceConfig } from "./importdatasourceconfig";


// ImportDataSource
/** 
 * An object that has details about the source of the data that was submitted for import.
**/
export class ImportDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceConfig" })
  dataSourceConfig: ImportDataSourceConfig;
}
