import { SpeakeasyBase } from "../../../internal/utils";
import { TaskExecutionStatusEnum } from "./taskexecutionstatusenum";
/**
 * Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html">ListTaskExecutions</a> operation is called.
**/
export declare class TaskExecutionListEntry extends SpeakeasyBase {
    status?: TaskExecutionStatusEnum;
    taskExecutionArn?: string;
}
