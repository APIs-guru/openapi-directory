import { SpeakeasyBase } from "../../../internal/utils";
import { GroupedResourceCount } from "./groupedresourcecount";
export declare class GetAggregateDiscoveredResourceCountsResponse extends SpeakeasyBase {
    groupByKey?: string;
    groupedResourceCounts?: GroupedResourceCount[];
    nextToken?: string;
    totalDiscoveredResources: number;
}
