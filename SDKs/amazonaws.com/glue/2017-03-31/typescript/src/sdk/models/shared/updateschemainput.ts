import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompatibilityEnum } from "./compatibilityenum";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";



export class UpdateSchemaInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Compatibility" })
  compatibility?: CompatibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionNumber" })
  schemaVersionNumber?: SchemaVersionNumber;
}
