import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StageExecutionStatusEnum } from "./stageexecutionstatusenum";


// StageExecution
/** 
 * Represents information about the run of a stage.
**/
export class StageExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId: string;

  @Metadata({ data: "json, name=status" })
  status: StageExecutionStatusEnum;
}
