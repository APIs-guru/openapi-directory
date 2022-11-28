import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceCount } from "./resourcecount";
export declare class GetDiscoveredResourceCountsResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceCounts?: ResourceCount[];
    totalDiscoveredResources?: number;
}
