import { SpeakeasyBase } from "../../../internal/utils";
import { CompatibilityEnum } from "./compatibilityenum";
import { SchemaId } from "./schemaid";
import { SchemaVersionNumber } from "./schemaversionnumber";
export declare class UpdateSchemaInput extends SpeakeasyBase {
    compatibility?: CompatibilityEnum;
    description?: string;
    schemaId: SchemaId;
    schemaVersionNumber?: SchemaVersionNumber;
}
