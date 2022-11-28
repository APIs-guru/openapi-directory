import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an action for an experiment template.
**/
export declare class ExperimentTemplateAction extends SpeakeasyBase {
    actionId?: string;
    description?: string;
    parameters?: Map<string, string>;
    startAfter?: string[];
    targets?: Map<string, string>;
}
