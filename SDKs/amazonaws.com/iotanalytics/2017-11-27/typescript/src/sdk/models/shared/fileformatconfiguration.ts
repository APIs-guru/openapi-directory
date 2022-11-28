import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParquetConfiguration } from "./parquetconfiguration";



// FileFormatConfiguration
/** 
 * <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
**/
export class FileFormatConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jsonConfiguration" })
  jsonConfiguration?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=parquetConfiguration" })
  parquetConfiguration?: ParquetConfiguration;
}
