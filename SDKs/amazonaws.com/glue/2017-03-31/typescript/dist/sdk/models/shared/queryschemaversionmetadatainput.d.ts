import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataKeyValuePair } from "./metadatakeyvaluepair";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";
export declare class QuerySchemaVersionMetadataInput extends SpeakeasyBase {
    maxResults?: number;
    metadataList?: MetadataKeyValuePair[];
    nextToken?: string;
    schemaId?: SchemaId;
    schemaVersionId?: string;
    schemaVersionNumber?: SchemaVersionNumber;
}
