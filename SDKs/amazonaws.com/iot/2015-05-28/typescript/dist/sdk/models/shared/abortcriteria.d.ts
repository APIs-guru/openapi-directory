import { SpeakeasyBase } from "../../../internal/utils";
import { AbortActionEnum } from "./abortactionenum";
import { JobExecutionFailureTypeEnum } from "./jobexecutionfailuretypeenum";
/**
 * The criteria that determine when and how a job abort takes place.
**/
export declare class AbortCriteria extends SpeakeasyBase {
    action: AbortActionEnum;
    failureType: JobExecutionFailureTypeEnum;
    minNumberOfExecutedThings: number;
    thresholdPercentage: number;
}
