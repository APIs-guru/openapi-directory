import { SpeakeasyBase } from "../../../internal/utils";
import { SortEnum } from "./sortenum";
/**
 * Specifies a field to sort by and a sort order.
**/
export declare class SortCriterion extends SpeakeasyBase {
    fieldName?: string;
    sort?: SortEnum;
}
