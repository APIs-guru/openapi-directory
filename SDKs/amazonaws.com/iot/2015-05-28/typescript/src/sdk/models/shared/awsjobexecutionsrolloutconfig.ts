import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsJobExponentialRolloutRate } from "./awsjobexponentialrolloutrate";



// AwsJobExecutionsRolloutConfig
/** 
 * Configuration for the rollout of OTA updates.
**/
export class AwsJobExecutionsRolloutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exponentialRate" })
  exponentialRate?: AwsJobExponentialRolloutRate;

  @SpeakeasyMetadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}
