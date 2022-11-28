import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineObject } from "./pipelineobject";
/**
 * Contains information about a pipeline task that is assigned to a task runner.
**/
export declare class TaskObject extends SpeakeasyBase {
    attemptId?: string;
    objects?: Map<string, PipelineObject>;
    pipelineId?: string;
    taskId?: string;
}
