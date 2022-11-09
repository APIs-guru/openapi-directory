import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsJobRateIncreaseCriteria
/** 
 * The criteria to initiate the increase in rate of rollout for a job.
**/
export class AwsJobRateIncreaseCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=numberOfNotifiedThings" })
  numberOfNotifiedThings?: number;

  @Metadata({ data: "json, name=numberOfSucceededThings" })
  numberOfSucceededThings?: number;
}
