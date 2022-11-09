import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompatibilityEnum } from "./compatibilityenum";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";


export class UpdateSchemaInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Compatibility" })
  compatibility?: CompatibilityEnum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;

  @Metadata({ data: "json, name=SchemaVersionNumber" })
  schemaVersionNumber?: SchemaVersionNumber;
}
