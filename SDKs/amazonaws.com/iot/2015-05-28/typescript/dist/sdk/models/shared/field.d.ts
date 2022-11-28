import { SpeakeasyBase } from "../../../internal/utils";
import { FieldTypeEnum } from "./fieldtypeenum";
/**
 * Describes the name and data type at a field.
**/
export declare class Field extends SpeakeasyBase {
    name?: string;
    type?: FieldTypeEnum;
}
