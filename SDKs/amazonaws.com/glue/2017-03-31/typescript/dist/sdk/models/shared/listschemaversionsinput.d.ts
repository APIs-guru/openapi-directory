import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaId } from "./schemaid";
export declare class ListSchemaVersionsInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    schemaId: SchemaId;
}
