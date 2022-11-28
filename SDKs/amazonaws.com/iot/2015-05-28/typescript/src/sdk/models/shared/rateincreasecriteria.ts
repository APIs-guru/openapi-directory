import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RateIncreaseCriteria
/** 
 * Allows you to define a criteria to initiate the increase in rate of rollout for a job.
**/
export class RateIncreaseCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfNotifiedThings" })
  numberOfNotifiedThings?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfSucceededThings" })
  numberOfSucceededThings?: number;
}
