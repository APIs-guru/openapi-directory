import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";



export class GetSchemaVersionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaId" })
  schemaId?: SchemaId;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionNumber" })
  schemaVersionNumber?: SchemaVersionNumber;
}
