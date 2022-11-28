import { SpeakeasyBase } from "../../../internal/utils";
import { TransformSortColumnTypeEnum } from "./transformsortcolumntypeenum";
import { SortDirectionTypeEnum } from "./sortdirectiontypeenum";
/**
 * The sorting criteria that are associated with the machine learning transform.
**/
export declare class TransformSortCriteria extends SpeakeasyBase {
    column: TransformSortColumnTypeEnum;
    sortDirection: SortDirectionTypeEnum;
}
