import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateConformancePackComplianceSummary } from "./aggregateconformancepackcompliancesummary";
export declare class GetAggregateConformancePackComplianceSummaryResponse extends SpeakeasyBase {
    aggregateConformancePackComplianceSummaries?: AggregateConformancePackComplianceSummary[];
    groupByKey?: string;
    nextToken?: string;
}
