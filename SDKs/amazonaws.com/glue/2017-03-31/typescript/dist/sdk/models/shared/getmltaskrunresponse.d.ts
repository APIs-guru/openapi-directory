import { SpeakeasyBase } from "../../../internal/utils";
import { TaskRunProperties } from "./taskrunproperties";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
export declare class GetMlTaskRunResponse extends SpeakeasyBase {
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
