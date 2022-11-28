import { SpeakeasyBase } from "../../../internal/utils";
import { StepCancellationOptionEnum } from "./stepcancellationoptionenum";
/**
 * The input argument to the <a>CancelSteps</a> operation.
**/
export declare class CancelStepsInput extends SpeakeasyBase {
    clusterId: string;
    stepCancellationOption?: StepCancellationOptionEnum;
    stepIds: string[];
}
