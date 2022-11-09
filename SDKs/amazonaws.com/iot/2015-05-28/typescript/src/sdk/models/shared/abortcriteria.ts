import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AbortActionEnum } from "./abortactionenum";
import { JobExecutionFailureTypeEnum } from "./jobexecutionfailuretypeenum";


// AbortCriteria
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class AbortCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: AbortActionEnum;

  @Metadata({ data: "json, name=failureType" })
  failureType: JobExecutionFailureTypeEnum;

  @Metadata({ data: "json, name=minNumberOfExecutedThings" })
  minNumberOfExecutedThings: number;

  @Metadata({ data: "json, name=thresholdPercentage" })
  thresholdPercentage: number;
}
