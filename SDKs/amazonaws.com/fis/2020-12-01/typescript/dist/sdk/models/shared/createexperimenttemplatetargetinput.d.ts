import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentTemplateTargetInputFilter } from "./experimenttemplatetargetinputfilter";
/**
 * Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.
**/
export declare class CreateExperimentTemplateTargetInput extends SpeakeasyBase {
    filters?: ExperimentTemplateTargetInputFilter[];
    resourceArns?: string[];
    resourceTags?: Map<string, string>;
    resourceType: string;
    selectionMode: string;
}
