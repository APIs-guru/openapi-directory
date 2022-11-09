import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskExecutionStatusEnum } from "./taskexecutionstatusenum";


// TaskExecutionListEntry
/** 
 * Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html">ListTaskExecutions</a> operation is called.
**/
export class TaskExecutionListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: TaskExecutionStatusEnum;

  @Metadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn?: string;
}
