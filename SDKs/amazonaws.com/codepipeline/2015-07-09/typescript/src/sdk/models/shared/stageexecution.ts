import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StageExecutionStatusEnum } from "./stageexecutionstatusenum";



// StageExecution
/** 
 * Represents information about the run of a stage.
**/
export class StageExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: StageExecutionStatusEnum;
}
