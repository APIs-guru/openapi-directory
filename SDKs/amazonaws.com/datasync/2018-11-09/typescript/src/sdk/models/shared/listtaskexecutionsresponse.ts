import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TaskExecutionListEntry } from "./taskexecutionlistentry";


// ListTaskExecutionsResponse
/** 
 * ListTaskExecutionsResponse
**/
export class ListTaskExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TaskExecutions", elemType: shared.TaskExecutionListEntry })
  taskExecutions?: TaskExecutionListEntry[];
}
