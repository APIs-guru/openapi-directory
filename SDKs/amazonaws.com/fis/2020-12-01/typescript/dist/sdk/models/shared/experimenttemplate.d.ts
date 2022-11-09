import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentTemplateAction } from "./experimenttemplateaction";
import { ExperimentTemplateStopCondition } from "./experimenttemplatestopcondition";
import { ExperimentTemplateTarget } from "./experimenttemplatetarget";
/**
 * Describes an experiment template.
**/
export declare class ExperimentTemplate extends SpeakeasyBase {
    actions?: Map<string, ExperimentTemplateAction>;
    creationTime?: Date;
    description?: string;
    id?: string;
    lastUpdateTime?: Date;
    roleArn?: string;
    stopConditions?: ExperimentTemplateStopCondition[];
    tags?: Map<string, string>;
    targets?: Map<string, ExperimentTemplateTarget>;
}
