import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregateConformancePackComplianceFilters } from "./aggregateconformancepackcompliancefilters";


export class DescribeAggregateComplianceByConformancePacksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @Metadata({ data: "json, name=Filters" })
  filters?: AggregateConformancePackComplianceFilters;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
