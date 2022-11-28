import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataKeyValuePair } from "./metadatakeyvaluepair";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";



export class RemoveSchemaVersionMetadataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetadataKeyValue" })
  metadataKeyValue: MetadataKeyValuePair;

  @SpeakeasyMetadata({ data: "json, name=SchemaId" })
  schemaId?: SchemaId;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionNumber" })
  schemaVersionNumber?: SchemaVersionNumber;
}
