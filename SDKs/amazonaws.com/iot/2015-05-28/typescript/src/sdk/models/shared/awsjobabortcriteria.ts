import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsJobAbortCriteriaAbortActionEnum } from "./awsjobabortcriteriaabortactionenum";
import { AwsJobAbortCriteriaFailureTypeEnum } from "./awsjobabortcriteriafailuretypeenum";


// AwsJobAbortCriteria
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class AwsJobAbortCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: AwsJobAbortCriteriaAbortActionEnum;

  @Metadata({ data: "json, name=failureType" })
  failureType: AwsJobAbortCriteriaFailureTypeEnum;

  @Metadata({ data: "json, name=minNumberOfExecutedThings" })
  minNumberOfExecutedThings: number;

  @Metadata({ data: "json, name=thresholdPercentage" })
  thresholdPercentage: number;
}
