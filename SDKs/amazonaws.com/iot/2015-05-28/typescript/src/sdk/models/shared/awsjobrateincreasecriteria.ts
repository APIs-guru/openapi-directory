import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsJobRateIncreaseCriteria
/** 
 * The criteria to initiate the increase in rate of rollout for a job.
**/
export class AwsJobRateIncreaseCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfNotifiedThings" })
  numberOfNotifiedThings?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfSucceededThings" })
  numberOfSucceededThings?: number;
}
