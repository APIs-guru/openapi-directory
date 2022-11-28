import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceCountFilters } from "./resourcecountfilters";
import { ResourceCountGroupKeyEnum } from "./resourcecountgroupkeyenum";
export declare class GetAggregateDiscoveredResourceCountsRequest extends SpeakeasyBase {
    configurationAggregatorName: string;
    filters?: ResourceCountFilters;
    groupByKey?: ResourceCountGroupKeyEnum;
    limit?: number;
    nextToken?: string;
}
