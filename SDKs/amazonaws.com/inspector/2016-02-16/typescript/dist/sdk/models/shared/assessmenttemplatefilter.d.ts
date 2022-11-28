import { SpeakeasyBase } from "../../../internal/utils";
import { DurationRange } from "./durationrange";
/**
 * Used as the request parameter in the <a>ListAssessmentTemplates</a> action.
**/
export declare class AssessmentTemplateFilter extends SpeakeasyBase {
    durationRange?: DurationRange;
    namePattern?: string;
    rulesPackageArns?: string[];
}
