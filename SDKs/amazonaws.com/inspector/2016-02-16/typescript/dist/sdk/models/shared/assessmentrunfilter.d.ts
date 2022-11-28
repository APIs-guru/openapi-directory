import { SpeakeasyBase } from "../../../internal/utils";
import { TimestampRange } from "./timestamprange";
import { DurationRange } from "./durationrange";
import { AssessmentRunStateEnum } from "./assessmentrunstateenum";
/**
 * Used as the request parameter in the <a>ListAssessmentRuns</a> action.
**/
export declare class AssessmentRunFilter extends SpeakeasyBase {
    completionTimeRange?: TimestampRange;
    durationRange?: DurationRange;
    namePattern?: string;
    rulesPackageArns?: string[];
    startTimeRange?: TimestampRange;
    stateChangeTimeRange?: TimestampRange;
    states?: AssessmentRunStateEnum[];
}
