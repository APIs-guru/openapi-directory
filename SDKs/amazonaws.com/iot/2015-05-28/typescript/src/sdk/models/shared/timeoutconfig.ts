import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeoutConfig
/** 
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export class TimeoutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inProgressTimeoutInMinutes" })
  inProgressTimeoutInMinutes?: number;
}
