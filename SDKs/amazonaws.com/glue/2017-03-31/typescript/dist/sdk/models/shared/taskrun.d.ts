import { SpeakeasyBase } from "../../../internal/utils";
import { TaskRunProperties } from "./taskrunproperties";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
/**
 * The sampling parameters that are associated with the machine learning transform.
**/
export declare class TaskRun extends SpeakeasyBase {
    completedOn?: Date;
    errorString?: string;
    executionTime?: number;
    lastModifiedOn?: Date;
    logGroupName?: string;
    properties?: TaskRunProperties;
    startedOn?: Date;
    status?: TaskStatusTypeEnum;
    taskRunId?: string;
    transformId?: string;
}
