import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScheduleStateEnum } from "./schedulestateenum";


// Schedule
/** 
 * A scheduling object using a <code>cron</code> statement to schedule an event.
**/
export class Schedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression?: string;

  @Metadata({ data: "json, name=State" })
  state?: ScheduleStateEnum;
}
