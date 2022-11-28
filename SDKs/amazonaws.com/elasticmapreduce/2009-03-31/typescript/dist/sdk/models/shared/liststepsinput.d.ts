import { SpeakeasyBase } from "../../../internal/utils";
import { StepStateEnum } from "./stepstateenum";
/**
 * This input determines which steps to list.
**/
export declare class ListStepsInput extends SpeakeasyBase {
    clusterId: string;
    marker?: string;
    stepIds?: string[];
    stepStates?: StepStateEnum[];
}
