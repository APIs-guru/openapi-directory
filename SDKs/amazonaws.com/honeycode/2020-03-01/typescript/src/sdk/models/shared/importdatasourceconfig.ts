import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImportDataSourceConfig
/** 
 *  An object that contains the configuration parameters for the data source of an import request. 
**/
export class ImportDataSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceUrl" })
  dataSourceUrl?: string;
}
