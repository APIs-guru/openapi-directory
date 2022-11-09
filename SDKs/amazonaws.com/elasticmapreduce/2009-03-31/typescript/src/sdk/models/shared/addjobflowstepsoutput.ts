import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddJobFlowStepsOutput
/** 
 *  The output for the <a>AddJobFlowSteps</a> operation. 
**/
export class AddJobFlowStepsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StepIds" })
  stepIds?: string[];
}
