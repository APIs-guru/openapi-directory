import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceFilters } from "./resourcefilters";
import { ResourceTypeEnum } from "./resourcetypeenum";


export class ListAggregateDiscoveredResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @Metadata({ data: "json, name=Filters" })
  filters?: ResourceFilters;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: ResourceTypeEnum;
}
