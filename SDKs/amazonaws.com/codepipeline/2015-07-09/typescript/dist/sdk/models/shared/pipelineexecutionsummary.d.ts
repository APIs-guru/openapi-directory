import { SpeakeasyBase } from "../../../internal/utils";
import { SourceRevision } from "./sourcerevision";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { StopExecutionTrigger } from "./stopexecutiontrigger";
import { ExecutionTrigger } from "./executiontrigger";
/**
 * Summary information about a pipeline execution.
**/
export declare class PipelineExecutionSummary extends SpeakeasyBase {
    lastUpdateTime?: Date;
    pipelineExecutionId?: string;
    sourceRevisions?: SourceRevision[];
    startTime?: Date;
    status?: PipelineExecutionStatusEnum;
    stopTrigger?: StopExecutionTrigger;
    trigger?: ExecutionTrigger;
}
