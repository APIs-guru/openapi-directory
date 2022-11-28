import { SpeakeasyBase } from "../../../internal/utils";
import { AwsJobAbortCriteriaAbortActionEnum } from "./awsjobabortcriteriaabortactionenum";
import { AwsJobAbortCriteriaFailureTypeEnum } from "./awsjobabortcriteriafailuretypeenum";
/**
 * The criteria that determine when and how a job abort takes place.
**/
export declare class AwsJobAbortCriteria extends SpeakeasyBase {
    action: AwsJobAbortCriteriaAbortActionEnum;
    failureType: AwsJobAbortCriteriaFailureTypeEnum;
    minNumberOfExecutedThings: number;
    thresholdPercentage: number;
}
