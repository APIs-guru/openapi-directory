import { SpeakeasyBase } from "../../../internal/utils";
import { StepSummary } from "./stepsummary";
/**
 * This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list.
**/
export declare class ListStepsOutput extends SpeakeasyBase {
    marker?: string;
    steps?: StepSummary[];
}
