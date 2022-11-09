import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourceRevision } from "./sourcerevision";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { StopExecutionTrigger } from "./stopexecutiontrigger";
import { ExecutionTrigger } from "./executiontrigger";


// PipelineExecutionSummary
/** 
 * Summary information about a pipeline execution.
**/
export class PipelineExecutionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;

  @Metadata({ data: "json, name=sourceRevisions", elemType: shared.SourceRevision })
  sourceRevisions?: SourceRevision[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: PipelineExecutionStatusEnum;

  @Metadata({ data: "json, name=stopTrigger" })
  stopTrigger?: StopExecutionTrigger;

  @Metadata({ data: "json, name=trigger" })
  trigger?: ExecutionTrigger;
}
