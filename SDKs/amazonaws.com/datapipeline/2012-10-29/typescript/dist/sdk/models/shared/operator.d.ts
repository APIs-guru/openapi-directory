import { SpeakeasyBase } from "../../../internal/utils";
import { OperatorTypeEnum } from "./operatortypeenum";
/**
 * Contains a logical operation for comparing the value of a field with a specified value.
**/
export declare class Operator extends SpeakeasyBase {
    type?: OperatorTypeEnum;
    values?: string[];
}
