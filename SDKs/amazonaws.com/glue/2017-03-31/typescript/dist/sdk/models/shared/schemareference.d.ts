import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaId } from "./schemaid";
/**
 * An object that references a schema stored in the Glue Schema Registry.
**/
export declare class SchemaReference extends SpeakeasyBase {
    schemaId?: SchemaId;
    schemaVersionId?: string;
    schemaVersionNumber?: number;
}
