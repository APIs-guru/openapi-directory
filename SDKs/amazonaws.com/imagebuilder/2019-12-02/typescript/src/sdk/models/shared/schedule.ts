import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineExecutionStartConditionEnum } from "./pipelineexecutionstartconditionenum";



// Schedule
/** 
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
export class Schedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionStartCondition" })
  pipelineExecutionStartCondition?: PipelineExecutionStartConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=scheduleExpression" })
  scheduleExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}
