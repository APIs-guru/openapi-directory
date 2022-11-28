import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineExecutionStartConditionEnum } from "./pipelineexecutionstartconditionenum";
/**
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
export declare class Schedule extends SpeakeasyBase {
    pipelineExecutionStartCondition?: PipelineExecutionStartConditionEnum;
    scheduleExpression?: string;
    timezone?: string;
}
