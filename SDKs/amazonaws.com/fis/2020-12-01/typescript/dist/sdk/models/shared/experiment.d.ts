import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentAction } from "./experimentaction";
import { ExperimentState } from "./experimentstate";
import { ExperimentStopCondition } from "./experimentstopcondition";
import { ExperimentTarget } from "./experimenttarget";
/**
 * Describes an experiment.
**/
export declare class Experiment extends SpeakeasyBase {
    actions?: Map<string, ExperimentAction>;
    creationTime?: Date;
    endTime?: Date;
    experimentTemplateId?: string;
    id?: string;
    roleArn?: string;
    startTime?: Date;
    state?: ExperimentState;
    stopConditions?: ExperimentStopCondition[];
    tags?: Map<string, string>;
    targets?: Map<string, ExperimentTarget>;
}
