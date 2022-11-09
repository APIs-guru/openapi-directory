import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaId } from "./schemaid";


// SchemaReference
/** 
 * An object that references a schema stored in the Glue Schema Registry.
**/
export class SchemaReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaId" })
  schemaId?: SchemaId;

  @Metadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @Metadata({ data: "json, name=SchemaVersionNumber" })
  schemaVersionNumber?: number;
}
