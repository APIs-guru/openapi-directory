import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaskSchedule
/** 
 * Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>.
**/
export class TaskSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScheduleExpression" })
  scheduleExpression: string;
}
