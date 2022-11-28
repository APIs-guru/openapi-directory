import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StageRetryModeEnum } from "./stageretrymodeenum";



// RetryStageExecutionInput
/** 
 * Represents the input of a <code>RetryStageExecution</code> action.
**/
export class RetryStageExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @SpeakeasyMetadata({ data: "json, name=retryMode" })
  retryMode: StageRetryModeEnum;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName: string;
}
