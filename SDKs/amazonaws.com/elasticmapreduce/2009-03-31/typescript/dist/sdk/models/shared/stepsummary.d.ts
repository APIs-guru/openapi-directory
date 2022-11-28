import { SpeakeasyBase } from "../../../internal/utils";
import { ActionOnFailureEnum } from "./actiononfailureenum";
import { HadoopStepConfig } from "./hadoopstepconfig";
import { StepStatus } from "./stepstatus";
/**
 * The summary of the cluster step.
**/
export declare class StepSummary extends SpeakeasyBase {
    actionOnFailure?: ActionOnFailureEnum;
    config?: HadoopStepConfig;
    id?: string;
    name?: string;
    status?: StepStatus;
}
