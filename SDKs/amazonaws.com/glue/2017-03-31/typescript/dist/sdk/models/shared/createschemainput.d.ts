import { SpeakeasyBase } from "../../../internal/utils";
import { CompatibilityEnum } from "./compatibilityenum";
import { DataFormatEnum } from "./dataformatenum";
import { RegistryId } from "./registryid";
export declare class CreateSchemaInput extends SpeakeasyBase {
    compatibility?: CompatibilityEnum;
    dataFormat: DataFormatEnum;
    description?: string;
    registryId?: RegistryId;
    schemaDefinition?: string;
    schemaName: string;
    tags?: Map<string, string>;
}
