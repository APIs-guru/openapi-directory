import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsJobExponentialRolloutRate } from "./awsjobexponentialrolloutrate";


// AwsJobExecutionsRolloutConfig
/** 
 * Configuration for the rollout of OTA updates.
**/
export class AwsJobExecutionsRolloutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=exponentialRate" })
  exponentialRate?: AwsJobExponentialRolloutRate;

  @Metadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}
