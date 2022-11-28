import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentActionState } from "./experimentactionstate";
/**
 * Describes the action for an experiment.
**/
export declare class ExperimentAction extends SpeakeasyBase {
    actionId?: string;
    description?: string;
    parameters?: Map<string, string>;
    startAfter?: string[];
    state?: ExperimentActionState;
    targets?: Map<string, string>;
}
