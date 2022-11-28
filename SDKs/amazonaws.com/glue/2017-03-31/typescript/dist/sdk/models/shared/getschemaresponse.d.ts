import { SpeakeasyBase } from "../../../internal/utils";
import { CompatibilityEnum } from "./compatibilityenum";
import { DataFormatEnum } from "./dataformatenum";
import { SchemaStatusEnum } from "./schemastatusenum";
export declare class GetSchemaResponse extends SpeakeasyBase {
    compatibility?: CompatibilityEnum;
    createdTime?: string;
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
    updatedTime?: string;
}
