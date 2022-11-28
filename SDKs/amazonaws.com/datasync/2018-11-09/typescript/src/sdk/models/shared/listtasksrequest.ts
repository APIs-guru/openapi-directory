import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskFilter } from "./taskfilter";



// ListTasksRequest
/** 
 * ListTasksRequest
**/
export class ListTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: TaskFilter })
  filters?: TaskFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
