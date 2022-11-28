import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataKeyValuePair } from "./metadatakeyvaluepair";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";
export declare class RemoveSchemaVersionMetadataInput extends SpeakeasyBase {
    metadataKeyValue: MetadataKeyValuePair;
    schemaId?: SchemaId;
    schemaVersionId?: string;
    schemaVersionNumber?: SchemaVersionNumber;
}
