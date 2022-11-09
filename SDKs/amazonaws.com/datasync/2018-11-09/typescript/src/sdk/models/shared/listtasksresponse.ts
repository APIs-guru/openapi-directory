import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TaskListEntry } from "./tasklistentry";


// ListTasksResponse
/** 
 * ListTasksResponse
**/
export class ListTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Tasks", elemType: shared.TaskListEntry })
  tasks?: TaskListEntry[];
}
