import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRunFilter } from "./assessmentrunfilter";
export declare class ListAssessmentRunsRequest extends SpeakeasyBase {
    assessmentTemplateArns?: string[];
    filter?: AssessmentRunFilter;
    maxResults?: number;
    nextToken?: string;
}
