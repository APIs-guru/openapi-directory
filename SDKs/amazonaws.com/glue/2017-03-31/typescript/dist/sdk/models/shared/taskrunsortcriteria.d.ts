import { SpeakeasyBase } from "../../../internal/utils";
import { TaskRunSortColumnTypeEnum } from "./taskrunsortcolumntypeenum";
import { SortDirectionTypeEnum } from "./sortdirectiontypeenum";
/**
 * The sorting criteria that are used to sort the list of task runs for the machine learning transform.
**/
export declare class TaskRunSortCriteria extends SpeakeasyBase {
    column: TaskRunSortColumnTypeEnum;
    sortDirection: SortDirectionTypeEnum;
}
