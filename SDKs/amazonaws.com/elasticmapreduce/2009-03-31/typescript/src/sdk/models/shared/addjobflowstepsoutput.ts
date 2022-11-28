import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddJobFlowStepsOutput
/** 
 *  The output for the <a>AddJobFlowSteps</a> operation. 
**/
export class AddJobFlowStepsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StepIds" })
  stepIds?: string[];
}
