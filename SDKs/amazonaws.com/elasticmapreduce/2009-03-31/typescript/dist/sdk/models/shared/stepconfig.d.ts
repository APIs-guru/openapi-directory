import { SpeakeasyBase } from "../../../internal/utils";
import { ActionOnFailureEnum } from "./actiononfailureenum";
import { HadoopJarStepConfig } from "./hadoopjarstepconfig";
/**
 * Specification for a cluster (job flow) step.
**/
export declare class StepConfig extends SpeakeasyBase {
    actionOnFailure?: ActionOnFailureEnum;
    hadoopJarStep: HadoopJarStepConfig;
    name: string;
}
