import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskStatusEnum } from "./taskstatusenum";


// TaskListEntry
/** 
 * Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an array that contains a list of tasks when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html">ListTasks</a> operation is called. A task includes the source and destination file systems to sync and the options to use for the tasks.
**/
export class TaskListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: TaskStatusEnum;

  @Metadata({ data: "json, name=TaskArn" })
  taskArn?: string;
}
