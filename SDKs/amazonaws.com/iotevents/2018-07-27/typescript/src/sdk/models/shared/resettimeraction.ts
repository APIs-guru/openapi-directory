import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResetTimerAction
/** 
 * Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
**/
export class ResetTimerAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timerName" })
  timerName: string;
}
