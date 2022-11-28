import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskListEntry } from "./tasklistentry";



// ListTasksResponse
/** 
 * ListTasksResponse
**/
export class ListTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Tasks", elemType: TaskListEntry })
  tasks?: TaskListEntry[];
}
