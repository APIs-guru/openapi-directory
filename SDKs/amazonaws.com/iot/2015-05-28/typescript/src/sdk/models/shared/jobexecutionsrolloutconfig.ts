import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExponentialRolloutRate } from "./exponentialrolloutrate";



// JobExecutionsRolloutConfig
/** 
 * Allows you to create a staged rollout of a job.
**/
export class JobExecutionsRolloutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exponentialRate" })
  exponentialRate?: ExponentialRolloutRate;

  @SpeakeasyMetadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}
