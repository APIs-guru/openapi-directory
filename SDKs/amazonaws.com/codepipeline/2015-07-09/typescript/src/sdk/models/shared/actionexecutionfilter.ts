import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionExecutionFilter
/** 
 * Filter values for the action execution.
**/
export class ActionExecutionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;
}
