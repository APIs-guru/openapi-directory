import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceCountFilters } from "./resourcecountfilters";
import { ResourceCountGroupKeyEnum } from "./resourcecountgroupkeyenum";



export class GetAggregateDiscoveredResourceCountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: ResourceCountFilters;

  @SpeakeasyMetadata({ data: "json, name=GroupByKey" })
  groupByKey?: ResourceCountGroupKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
