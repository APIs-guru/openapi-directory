import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceCountFilters } from "./resourcecountfilters";
import { ResourceCountGroupKeyEnum } from "./resourcecountgroupkeyenum";


export class GetAggregateDiscoveredResourceCountsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @Metadata({ data: "json, name=Filters" })
  filters?: ResourceCountFilters;

  @Metadata({ data: "json, name=GroupByKey" })
  groupByKey?: ResourceCountGroupKeyEnum;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
