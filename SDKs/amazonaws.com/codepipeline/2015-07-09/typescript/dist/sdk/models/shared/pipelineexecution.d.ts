import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactRevision } from "./artifactrevision";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
/**
 * Represents information about an execution of a pipeline.
**/
export declare class PipelineExecution extends SpeakeasyBase {
    artifactRevisions?: ArtifactRevision[];
    pipelineExecutionId?: string;
    pipelineName?: string;
    pipelineVersion?: number;
    status?: PipelineExecutionStatusEnum;
    statusSummary?: string;
}
