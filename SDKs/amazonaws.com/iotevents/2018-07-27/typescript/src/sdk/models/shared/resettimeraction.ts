import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResetTimerAction
/** 
 * Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
**/
export class ResetTimerAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=timerName" })
  timerName: string;
}
