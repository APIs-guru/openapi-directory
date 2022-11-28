import { SpeakeasyBase } from "../../../internal/utils";
import { Operator } from "./operator";
/**
 * A comparision that is used to determine whether a query should return this object.
**/
export declare class Selector extends SpeakeasyBase {
    fieldName?: string;
    operator?: Operator;
}
