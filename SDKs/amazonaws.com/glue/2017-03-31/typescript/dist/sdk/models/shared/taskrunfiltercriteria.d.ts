import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
import { TaskTypeEnum } from "./tasktypeenum";
/**
 * The criteria that are used to filter the task runs for the machine learning transform.
**/
export declare class TaskRunFilterCriteria extends SpeakeasyBase {
    startedAfter?: Date;
    startedBefore?: Date;
    status?: TaskStatusTypeEnum;
    taskRunType?: TaskTypeEnum;
}
