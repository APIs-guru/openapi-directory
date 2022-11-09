import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TypeDefinitionFormatEnum } from "./typedefinitionformatenum";
/**
 * Describes a type.
**/
export declare class Type extends SpeakeasyBase {
    arn?: string;
    definition?: string;
    description?: string;
    format?: TypeDefinitionFormatEnum;
    name?: string;
}
