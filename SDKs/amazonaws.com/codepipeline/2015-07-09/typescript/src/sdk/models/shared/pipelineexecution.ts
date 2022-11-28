import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactRevision } from "./artifactrevision";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";



// PipelineExecution
/** 
 * Represents information about an execution of a pipeline.
**/
export class PipelineExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactRevisions", elemType: ArtifactRevision })
  artifactRevisions?: ArtifactRevision[];

  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineVersion" })
  pipelineVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PipelineExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusSummary" })
  statusSummary?: string;
}
