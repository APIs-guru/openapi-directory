import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaId } from "./schemaid";


export class GetSchemaInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;
}
