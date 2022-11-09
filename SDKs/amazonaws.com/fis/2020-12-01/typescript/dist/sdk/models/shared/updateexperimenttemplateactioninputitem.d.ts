import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Specifies an action for an experiment template.
**/
export declare class UpdateExperimentTemplateActionInputItem extends SpeakeasyBase {
    actionId?: string;
    description?: string;
    parameters?: Map<string, string>;
    startAfter?: string[];
    targets?: Map<string, string>;
}
