import { SpeakeasyBase } from "../../../internal/utils";
import { DataFormatEnum } from "./dataformatenum";
export declare class CheckSchemaVersionValidityInput extends SpeakeasyBase {
    dataFormat: DataFormatEnum;
    schemaDefinition: string;
}
