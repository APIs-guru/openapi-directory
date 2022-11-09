import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
import { TaskTypeEnum } from "./tasktypeenum";


// TaskRunFilterCriteria
/** 
 * The criteria that are used to filter the task runs for the machine learning transform.
**/
export class TaskRunFilterCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=StartedAfter" })
  startedAfter?: Date;

  @Metadata({ data: "json, name=StartedBefore" })
  startedBefore?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: TaskStatusTypeEnum;

  @Metadata({ data: "json, name=TaskRunType" })
  taskRunType?: TaskTypeEnum;
}
