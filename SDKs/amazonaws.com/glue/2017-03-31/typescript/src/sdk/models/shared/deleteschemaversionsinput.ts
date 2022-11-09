import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaId } from "./schemaid";


export class DeleteSchemaVersionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;

  @Metadata({ data: "json, name=Versions" })
  versions: string;
}
