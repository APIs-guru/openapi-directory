import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskExecutionListEntry } from "./taskexecutionlistentry";



// ListTaskExecutionsResponse
/** 
 * ListTaskExecutionsResponse
**/
export class ListTaskExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskExecutions", elemType: TaskExecutionListEntry })
  taskExecutions?: TaskExecutionListEntry[];
}
