import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStatusTypeEnum } from "./taskstatustypeenum";
export declare class CancelMlTaskRunResponse extends SpeakeasyBase {
    status?: TaskStatusTypeEnum;
    taskRunId?: string;
    transformId?: string;
}
