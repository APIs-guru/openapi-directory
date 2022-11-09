import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentTargetFilter } from "./experimenttargetfilter";
/**
 * Describes a target for an experiment.
**/
export declare class ExperimentTarget extends SpeakeasyBase {
    filters?: ExperimentTargetFilter[];
    resourceArns?: string[];
    resourceTags?: Map<string, string>;
    resourceType?: string;
    selectionMode?: string;
}
