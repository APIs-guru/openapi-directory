import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateConformancePackComplianceSummaryFilters } from "./aggregateconformancepackcompliancesummaryfilters";
import { AggregateConformancePackComplianceSummaryGroupKeyEnum } from "./aggregateconformancepackcompliancesummarygroupkeyenum";



export class GetAggregateConformancePackComplianceSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: AggregateConformancePackComplianceSummaryFilters;

  @SpeakeasyMetadata({ data: "json, name=GroupByKey" })
  groupByKey?: AggregateConformancePackComplianceSummaryGroupKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
