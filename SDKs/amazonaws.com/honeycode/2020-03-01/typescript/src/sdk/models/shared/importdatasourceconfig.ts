import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportDataSourceConfig
/** 
 *  An object that contains the configuration parameters for the data source of an import request. 
**/
export class ImportDataSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceUrl" })
  dataSourceUrl?: string;
}
