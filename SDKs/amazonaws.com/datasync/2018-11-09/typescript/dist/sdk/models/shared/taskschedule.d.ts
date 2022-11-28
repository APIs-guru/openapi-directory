import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>.
**/
export declare class TaskSchedule extends SpeakeasyBase {
    scheduleExpression: string;
}
