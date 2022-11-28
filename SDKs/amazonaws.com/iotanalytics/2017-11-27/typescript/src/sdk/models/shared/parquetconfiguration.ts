import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaDefinition } from "./schemadefinition";



// ParquetConfiguration
/** 
 * Contains the configuration information of the Parquet format.
**/
export class ParquetConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schemaDefinition" })
  schemaDefinition?: SchemaDefinition;
}
