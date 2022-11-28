import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IoTJobTimeoutConfig
/** 
 * Contains information about the timeout configuration for a job.
**/
export class IoTJobTimeoutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inProgressTimeoutInMinutes" })
  inProgressTimeoutInMinutes?: number;
}
