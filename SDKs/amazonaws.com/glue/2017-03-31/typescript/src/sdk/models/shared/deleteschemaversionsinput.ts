import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaId } from "./schemaid";



export class DeleteSchemaVersionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;

  @SpeakeasyMetadata({ data: "json, name=Versions" })
  versions: string;
}
