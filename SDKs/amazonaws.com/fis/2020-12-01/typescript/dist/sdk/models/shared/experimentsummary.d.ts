import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentState } from "./experimentstate";
/**
 * Provides a summary of an experiment.
**/
export declare class ExperimentSummary extends SpeakeasyBase {
    creationTime?: Date;
    experimentTemplateId?: string;
    id?: string;
    state?: ExperimentState;
    tags?: Map<string, string>;
}
