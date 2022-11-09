import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";


export class GetSchemaVersionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaId" })
  schemaId?: SchemaId;

  @Metadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @Metadata({ data: "json, name=SchemaVersionNumber" })
  schemaVersionNumber?: SchemaVersionNumber;
}
