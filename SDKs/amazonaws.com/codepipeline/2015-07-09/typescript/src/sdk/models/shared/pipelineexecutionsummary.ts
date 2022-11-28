import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceRevision } from "./sourcerevision";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { StopExecutionTrigger } from "./stopexecutiontrigger";
import { ExecutionTrigger } from "./executiontrigger";



// PipelineExecutionSummary
/** 
 * Summary information about a pipeline execution.
**/
export class PipelineExecutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceRevisions", elemType: SourceRevision })
  sourceRevisions?: SourceRevision[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PipelineExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopTrigger" })
  stopTrigger?: StopExecutionTrigger;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger?: ExecutionTrigger;
}
