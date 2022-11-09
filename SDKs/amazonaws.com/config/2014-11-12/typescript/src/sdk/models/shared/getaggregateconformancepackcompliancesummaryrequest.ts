import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregateConformancePackComplianceSummaryFilters } from "./aggregateconformancepackcompliancesummaryfilters";
import { AggregateConformancePackComplianceSummaryGroupKeyEnum } from "./aggregateconformancepackcompliancesummarygroupkeyenum";


export class GetAggregateConformancePackComplianceSummaryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @Metadata({ data: "json, name=Filters" })
  filters?: AggregateConformancePackComplianceSummaryFilters;

  @Metadata({ data: "json, name=GroupByKey" })
  groupByKey?: AggregateConformancePackComplianceSummaryGroupKeyEnum;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
