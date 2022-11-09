import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IoTJobTimeoutConfig
/** 
 * Contains information about the timeout configuration for a job.
**/
export class IoTJobTimeoutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=inProgressTimeoutInMinutes" })
  inProgressTimeoutInMinutes?: number;
}
