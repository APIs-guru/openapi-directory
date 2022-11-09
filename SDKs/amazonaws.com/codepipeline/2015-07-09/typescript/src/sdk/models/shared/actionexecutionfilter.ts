import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionExecutionFilter
/** 
 * Filter values for the action execution.
**/
export class ActionExecutionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;
}
