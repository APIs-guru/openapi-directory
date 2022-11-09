import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RateIncreaseCriteria
/** 
 * Allows you to define a criteria to initiate the increase in rate of rollout for a job.
**/
export class RateIncreaseCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=numberOfNotifiedThings" })
  numberOfNotifiedThings?: number;

  @Metadata({ data: "json, name=numberOfSucceededThings" })
  numberOfSucceededThings?: number;
}
