import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataKeyValuePair } from "./metadatakeyvaluepair";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";


export class QuerySchemaVersionMetadataInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=MetadataList", elemType: shared.MetadataKeyValuePair })
  metadataList?: MetadataKeyValuePair[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SchemaId" })
  schemaId?: SchemaId;

  @Metadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @Metadata({ data: "json, name=SchemaVersionNumber" })
  schemaVersionNumber?: SchemaVersionNumber;
}
