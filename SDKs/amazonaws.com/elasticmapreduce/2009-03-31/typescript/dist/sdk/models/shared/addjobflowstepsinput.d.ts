import { SpeakeasyBase } from "../../../internal/utils";
import { StepConfig } from "./stepconfig";
/**
 *  The input argument to the <a>AddJobFlowSteps</a> operation.
**/
export declare class AddJobFlowStepsInput extends SpeakeasyBase {
    jobFlowId: string;
    steps: StepConfig[];
}
