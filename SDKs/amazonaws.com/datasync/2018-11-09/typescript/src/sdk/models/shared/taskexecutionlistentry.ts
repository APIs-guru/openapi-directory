import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskExecutionStatusEnum } from "./taskexecutionstatusenum";



// TaskExecutionListEntry
/** 
 * Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html">ListTaskExecutions</a> operation is called.
**/
export class TaskExecutionListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TaskExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TaskExecutionArn" })
  taskExecutionArn?: string;
}
