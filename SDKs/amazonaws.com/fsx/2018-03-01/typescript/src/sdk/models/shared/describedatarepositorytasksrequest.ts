import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryTaskFilter } from "./datarepositorytaskfilter";



export class DescribeDataRepositoryTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: DataRepositoryTaskFilter })
  filters?: DataRepositoryTaskFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskIds" })
  taskIds?: string[];
}
