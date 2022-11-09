import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TaskFilter } from "./taskfilter";


// ListTasksRequest
/** 
 * ListTasksRequest
**/
export class ListTasksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.TaskFilter })
  filters?: TaskFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
