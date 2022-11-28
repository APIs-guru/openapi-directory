import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetTimerAction
/** 
 * Information needed to set the timer.
**/
export class SetTimerAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationExpression" })
  durationExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=seconds" })
  seconds?: number;

  @SpeakeasyMetadata({ data: "json, name=timerName" })
  timerName: string;
}
