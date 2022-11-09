import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskRunSortColumnTypeEnum } from "./taskrunsortcolumntypeenum";
import { SortDirectionTypeEnum } from "./sortdirectiontypeenum";


// TaskRunSortCriteria
/** 
 * The sorting criteria that are used to sort the list of task runs for the machine learning transform.
**/
export class TaskRunSortCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=Column" })
  column: TaskRunSortColumnTypeEnum;

  @Metadata({ data: "json, name=SortDirection" })
  sortDirection: SortDirectionTypeEnum;
}
