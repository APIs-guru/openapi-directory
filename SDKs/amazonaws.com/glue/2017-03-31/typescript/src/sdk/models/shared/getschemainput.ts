import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaId } from "./schemaid";



export class GetSchemaInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;
}
