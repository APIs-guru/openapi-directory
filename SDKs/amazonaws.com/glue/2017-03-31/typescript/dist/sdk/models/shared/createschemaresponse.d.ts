import { SpeakeasyBase } from "../../../internal/utils";
import { CompatibilityEnum } from "./compatibilityenum";
import { DataFormatEnum } from "./dataformatenum";
import { SchemaStatusEnum } from "./schemastatusenum";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";
export declare class CreateSchemaResponse extends SpeakeasyBase {
    compatibility?: CompatibilityEnum;
    dataFormat?: DataFormatEnum;
    description?: string;
    latestSchemaVersion?: number;
    nextSchemaVersion?: number;
    registryArn?: string;
    registryName?: string;
    schemaArn?: string;
    schemaCheckpoint?: number;
    schemaName?: string;
    schemaStatus?: SchemaStatusEnum;
    schemaVersionId?: string;
    schemaVersionStatus?: SchemaVersionStatusEnum;
    tags?: Map<string, string>;
}
