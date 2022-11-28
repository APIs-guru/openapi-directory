import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaVersionNumber } from "./schemaversionnumber";
import { SchemaDiffTypeEnum } from "./schemadifftypeenum";
import { SchemaId } from "./schemaid";
export declare class GetSchemaVersionsDiffInput extends SpeakeasyBase {
    firstSchemaVersionNumber: SchemaVersionNumber;
    schemaDiffType: SchemaDiffTypeEnum;
    schemaId: SchemaId;
    secondSchemaVersionNumber: SchemaVersionNumber;
}
