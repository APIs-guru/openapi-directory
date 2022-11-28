import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupedResourceCount } from "./groupedresourcecount";



export class GetAggregateDiscoveredResourceCountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupByKey" })
  groupByKey?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupedResourceCounts", elemType: GroupedResourceCount })
  groupedResourceCounts?: GroupedResourceCount[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalDiscoveredResources" })
  totalDiscoveredResources: number;
}
