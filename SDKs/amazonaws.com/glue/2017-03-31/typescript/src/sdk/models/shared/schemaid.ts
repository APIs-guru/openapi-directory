import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchemaId
/** 
 * The unique ID of the schema in the Glue schema registry.
**/
export class SchemaId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegistryName" })
  registryName?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaName" })
  schemaName?: string;
}
