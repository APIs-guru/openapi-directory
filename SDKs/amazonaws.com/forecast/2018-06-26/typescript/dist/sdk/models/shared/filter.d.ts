import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterConditionStringEnum } from "./filterconditionstringenum";
/**
 * Describes a filter for choosing a subset of objects. Each filter consists of a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the objects that match the statement, respectively. The match statement consists of a key and a value.
**/
export declare class Filter extends SpeakeasyBase {
    condition: FilterConditionStringEnum;
    key: string;
    value: string;
}
