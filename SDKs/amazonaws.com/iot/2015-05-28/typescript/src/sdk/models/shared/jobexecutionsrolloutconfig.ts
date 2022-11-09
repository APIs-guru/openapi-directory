import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExponentialRolloutRate } from "./exponentialrolloutrate";


// JobExecutionsRolloutConfig
/** 
 * Allows you to create a staged rollout of a job.
**/
export class JobExecutionsRolloutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=exponentialRate" })
  exponentialRate?: ExponentialRolloutRate;

  @Metadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}
