import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaId } from "./schemaid";
export declare class DeleteSchemaVersionsInput extends SpeakeasyBase {
    schemaId: SchemaId;
    versions: string;
}
