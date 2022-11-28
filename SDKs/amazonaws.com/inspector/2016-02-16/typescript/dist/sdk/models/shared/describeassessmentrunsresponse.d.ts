import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRun } from "./assessmentrun";
import { FailedItemDetails } from "./faileditemdetails";
export declare class DescribeAssessmentRunsResponse extends SpeakeasyBase {
    assessmentRuns: AssessmentRun[];
    failedItems: Map<string, FailedItemDetails>;
}
