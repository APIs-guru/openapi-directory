import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceFilters } from "./resourcefilters";
import { ResourceTypeEnum } from "./resourcetypeenum";
export declare class ListAggregateDiscoveredResourcesRequest extends SpeakeasyBase {
    configurationAggregatorName: string;
    filters?: ResourceFilters;
    limit?: number;
    nextToken?: string;
    resourceType: ResourceTypeEnum;
}
