import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StepConfig } from "./stepconfig";



// AddJobFlowStepsInput
/** 
 *  The input argument to the <a>AddJobFlowSteps</a> operation. 
**/
export class AddJobFlowStepsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobFlowId" })
  jobFlowId: string;

  @SpeakeasyMetadata({ data: "json, name=Steps", elemType: StepConfig })
  steps: StepConfig[];
}
