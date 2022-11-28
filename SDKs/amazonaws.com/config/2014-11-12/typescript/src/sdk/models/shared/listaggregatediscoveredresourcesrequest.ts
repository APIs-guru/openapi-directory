import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceFilters } from "./resourcefilters";
import { ResourceTypeEnum } from "./resourcetypeenum";



export class ListAggregateDiscoveredResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: ResourceFilters;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: ResourceTypeEnum;
}
