import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataKeyValuePair } from "./metadatakeyvaluepair";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";



export class QuerySchemaVersionMetadataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=MetadataList", elemType: MetadataKeyValuePair })
  metadataList?: MetadataKeyValuePair[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaId" })
  schemaId?: SchemaId;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionNumber" })
  schemaVersionNumber?: SchemaVersionNumber;
}
