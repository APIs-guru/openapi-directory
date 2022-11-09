import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SchemaId
/** 
 * The unique ID of the schema in the Glue schema registry.
**/
export class SchemaId extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=SchemaName" })
  schemaName?: string;
}
