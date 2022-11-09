import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StageRetryModeEnum } from "./stageretrymodeenum";


// RetryStageExecutionInput
/** 
 * Represents the input of a <code>RetryStageExecution</code> action.
**/
export class RetryStageExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId: string;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @Metadata({ data: "json, name=retryMode" })
  retryMode: StageRetryModeEnum;

  @Metadata({ data: "json, name=stageName" })
  stageName: string;
}
