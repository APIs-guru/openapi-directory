import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaId } from "./schemaid";


export class RegisterSchemaVersionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaDefinition" })
  schemaDefinition: string;

  @Metadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;
}
