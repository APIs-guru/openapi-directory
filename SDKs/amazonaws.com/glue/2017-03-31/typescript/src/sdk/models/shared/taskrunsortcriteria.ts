import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskRunSortColumnTypeEnum } from "./taskrunsortcolumntypeenum";
import { SortDirectionTypeEnum } from "./sortdirectiontypeenum";



// TaskRunSortCriteria
/** 
 * The sorting criteria that are used to sort the list of task runs for the machine learning transform.
**/
export class TaskRunSortCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Column" })
  column: TaskRunSortColumnTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SortDirection" })
  sortDirection: SortDirectionTypeEnum;
}
