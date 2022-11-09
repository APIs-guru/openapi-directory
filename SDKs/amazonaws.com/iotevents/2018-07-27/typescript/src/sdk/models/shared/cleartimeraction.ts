import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClearTimerAction
/** 
 * Information needed to clear the timer.
**/
export class ClearTimerAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=timerName" })
  timerName: string;
}
