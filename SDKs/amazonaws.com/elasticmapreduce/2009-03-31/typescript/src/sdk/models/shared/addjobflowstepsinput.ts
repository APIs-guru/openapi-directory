import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StepConfig } from "./stepconfig";


// AddJobFlowStepsInput
/** 
 *  The input argument to the <a>AddJobFlowSteps</a> operation. 
**/
export class AddJobFlowStepsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobFlowId" })
  jobFlowId: string;

  @Metadata({ data: "json, name=Steps", elemType: shared.StepConfig })
  steps: StepConfig[];
}
