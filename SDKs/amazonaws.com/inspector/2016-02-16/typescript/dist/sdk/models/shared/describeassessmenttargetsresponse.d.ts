import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentTarget } from "./assessmenttarget";
import { FailedItemDetails } from "./faileditemdetails";
export declare class DescribeAssessmentTargetsResponse extends SpeakeasyBase {
    assessmentTargets: AssessmentTarget[];
    failedItems: Map<string, FailedItemDetails>;
}
