import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
import { TaskTypeEnum } from "./tasktypeenum";



// TaskRunFilterCriteria
/** 
 * The criteria that are used to filter the task runs for the machine learning transform.
**/
export class TaskRunFilterCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StartedAfter" })
  startedAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartedBefore" })
  startedBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TaskStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TaskRunType" })
  taskRunType?: TaskTypeEnum;
}
