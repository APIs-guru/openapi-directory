import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClearTimerAction
/** 
 * Information needed to clear the timer.
**/
export class ClearTimerAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timerName" })
  timerName: string;
}
