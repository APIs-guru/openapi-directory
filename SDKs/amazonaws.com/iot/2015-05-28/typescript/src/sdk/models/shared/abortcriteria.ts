import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AbortActionEnum } from "./abortactionenum";
import { JobExecutionFailureTypeEnum } from "./jobexecutionfailuretypeenum";



// AbortCriteria
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class AbortCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: AbortActionEnum;

  @SpeakeasyMetadata({ data: "json, name=failureType" })
  failureType: JobExecutionFailureTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=minNumberOfExecutedThings" })
  minNumberOfExecutedThings: number;

  @SpeakeasyMetadata({ data: "json, name=thresholdPercentage" })
  thresholdPercentage: number;
}
