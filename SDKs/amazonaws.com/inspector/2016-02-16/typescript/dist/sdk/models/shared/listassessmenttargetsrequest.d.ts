import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentTargetFilter } from "./assessmenttargetfilter";
export declare class ListAssessmentTargetsRequest extends SpeakeasyBase {
    filter?: AssessmentTargetFilter;
    maxResults?: number;
    nextToken?: string;
}
