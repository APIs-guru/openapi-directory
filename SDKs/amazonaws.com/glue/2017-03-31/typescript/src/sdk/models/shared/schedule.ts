import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduleStateEnum } from "./schedulestateenum";



// Schedule
/** 
 * A scheduling object using a <code>cron</code> statement to schedule an event.
**/
export class Schedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ScheduleStateEnum;
}
