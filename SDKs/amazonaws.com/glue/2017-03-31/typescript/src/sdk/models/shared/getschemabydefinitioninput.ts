import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaId } from "./schemaid";



export class GetSchemaByDefinitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaDefinition" })
  schemaDefinition: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;
}
