import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetTimerAction
/** 
 * Information needed to set the timer.
**/
export class SetTimerAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationExpression" })
  durationExpression?: string;

  @Metadata({ data: "json, name=seconds" })
  seconds?: number;

  @Metadata({ data: "json, name=timerName" })
  timerName: string;
}
