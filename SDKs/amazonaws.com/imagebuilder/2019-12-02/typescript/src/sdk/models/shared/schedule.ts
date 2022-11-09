import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PipelineExecutionStartConditionEnum } from "./pipelineexecutionstartconditionenum";


// Schedule
/** 
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
export class Schedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineExecutionStartCondition" })
  pipelineExecutionStartCondition?: PipelineExecutionStartConditionEnum;

  @Metadata({ data: "json, name=scheduleExpression" })
  scheduleExpression?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}
