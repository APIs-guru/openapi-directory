import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregateConformancePackComplianceSummary } from "./aggregateconformancepackcompliancesummary";


export class GetAggregateConformancePackComplianceSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AggregateConformancePackComplianceSummaries", elemType: shared.AggregateConformancePackComplianceSummary })
  aggregateConformancePackComplianceSummaries?: AggregateConformancePackComplianceSummary[];

  @Metadata({ data: "json, name=GroupByKey" })
  groupByKey?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
