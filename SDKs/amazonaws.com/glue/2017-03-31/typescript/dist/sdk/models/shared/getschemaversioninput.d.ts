import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";
export declare class GetSchemaVersionInput extends SpeakeasyBase {
    schemaId?: SchemaId;
    schemaVersionId?: string;
    schemaVersionNumber?: SchemaVersionNumber;
}
