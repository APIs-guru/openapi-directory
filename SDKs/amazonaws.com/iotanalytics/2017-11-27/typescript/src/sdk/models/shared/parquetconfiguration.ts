import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaDefinition } from "./schemadefinition";


// ParquetConfiguration
/** 
 * Contains the configuration information of the Parquet format.
**/
export class ParquetConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=schemaDefinition" })
  schemaDefinition?: SchemaDefinition;
}
