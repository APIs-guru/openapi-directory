import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaId } from "./schemaid";



export class DeleteSchemaInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;
}
