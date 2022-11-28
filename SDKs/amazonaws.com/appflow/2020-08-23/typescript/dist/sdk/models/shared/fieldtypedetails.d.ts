import { SpeakeasyBase } from "../../../internal/utils";
import { OperatorEnum } from "./operatorenum";
/**
 *  Contains details regarding the supported field type and the operators that can be applied for filtering.
**/
export declare class FieldTypeDetails extends SpeakeasyBase {
    fieldType: string;
    filterOperators: OperatorEnum[];
    supportedValues?: string[];
}
