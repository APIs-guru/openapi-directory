import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArtifactRevision } from "./artifactrevision";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";


// PipelineExecution
/** 
 * Represents information about an execution of a pipeline.
**/
export class PipelineExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactRevisions", elemType: shared.ArtifactRevision })
  artifactRevisions?: ArtifactRevision[];

  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName?: string;

  @Metadata({ data: "json, name=pipelineVersion" })
  pipelineVersion?: number;

  @Metadata({ data: "json, name=status" })
  status?: PipelineExecutionStatusEnum;

  @Metadata({ data: "json, name=statusSummary" })
  statusSummary?: string;
}
