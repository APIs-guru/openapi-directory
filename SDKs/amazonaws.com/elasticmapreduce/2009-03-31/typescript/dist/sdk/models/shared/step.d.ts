import { SpeakeasyBase } from "../../../internal/utils";
import { ActionOnFailureEnum } from "./actiononfailureenum";
import { HadoopStepConfig } from "./hadoopstepconfig";
import { StepStatus } from "./stepstatus";
/**
 * This represents a step in a cluster.
**/
export declare class Step extends SpeakeasyBase {
    actionOnFailure?: ActionOnFailureEnum;
    config?: HadoopStepConfig;
    id?: string;
    name?: string;
    status?: StepStatus;
}
