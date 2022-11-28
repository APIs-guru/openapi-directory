import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaId } from "./schemaid";



// SchemaReference
/** 
 * An object that references a schema stored in the Glue Schema Registry.
**/
export class SchemaReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaId" })
  schemaId?: SchemaId;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionNumber" })
  schemaVersionNumber?: number;
}
