import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaId } from "./schemaid";


export class GetSchemaByDefinitionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaDefinition" })
  schemaDefinition: string;

  @Metadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;
}
