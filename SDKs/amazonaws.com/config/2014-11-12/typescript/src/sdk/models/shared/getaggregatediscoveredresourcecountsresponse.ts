import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupedResourceCount } from "./groupedresourcecount";


export class GetAggregateDiscoveredResourceCountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupByKey" })
  groupByKey?: string;

  @Metadata({ data: "json, name=GroupedResourceCounts", elemType: shared.GroupedResourceCount })
  groupedResourceCounts?: GroupedResourceCount[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TotalDiscoveredResources" })
  totalDiscoveredResources: number;
}
