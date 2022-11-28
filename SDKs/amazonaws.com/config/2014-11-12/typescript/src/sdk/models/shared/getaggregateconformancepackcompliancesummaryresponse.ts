import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateConformancePackComplianceSummary } from "./aggregateconformancepackcompliancesummary";



export class GetAggregateConformancePackComplianceSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AggregateConformancePackComplianceSummaries", elemType: AggregateConformancePackComplianceSummary })
  aggregateConformancePackComplianceSummaries?: AggregateConformancePackComplianceSummary[];

  @SpeakeasyMetadata({ data: "json, name=GroupByKey" })
  groupByKey?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
