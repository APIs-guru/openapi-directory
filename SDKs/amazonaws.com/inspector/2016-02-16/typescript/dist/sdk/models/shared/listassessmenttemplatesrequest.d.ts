import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentTemplateFilter } from "./assessmenttemplatefilter";
export declare class ListAssessmentTemplatesRequest extends SpeakeasyBase {
    assessmentTargetArns?: string[];
    filter?: AssessmentTemplateFilter;
    maxResults?: number;
    nextToken?: string;
}
