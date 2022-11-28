import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsJobAbortCriteriaAbortActionEnum } from "./awsjobabortcriteriaabortactionenum";
import { AwsJobAbortCriteriaFailureTypeEnum } from "./awsjobabortcriteriafailuretypeenum";



// AwsJobAbortCriteria
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class AwsJobAbortCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: AwsJobAbortCriteriaAbortActionEnum;

  @SpeakeasyMetadata({ data: "json, name=failureType" })
  failureType: AwsJobAbortCriteriaFailureTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=minNumberOfExecutedThings" })
  minNumberOfExecutedThings: number;

  @SpeakeasyMetadata({ data: "json, name=thresholdPercentage" })
  thresholdPercentage: number;
}
