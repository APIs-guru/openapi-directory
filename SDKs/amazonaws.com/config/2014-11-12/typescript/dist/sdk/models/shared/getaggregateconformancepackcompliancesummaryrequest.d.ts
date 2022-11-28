import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateConformancePackComplianceSummaryFilters } from "./aggregateconformancepackcompliancesummaryfilters";
import { AggregateConformancePackComplianceSummaryGroupKeyEnum } from "./aggregateconformancepackcompliancesummarygroupkeyenum";
export declare class GetAggregateConformancePackComplianceSummaryRequest extends SpeakeasyBase {
    configurationAggregatorName: string;
    filters?: AggregateConformancePackComplianceSummaryFilters;
    groupByKey?: AggregateConformancePackComplianceSummaryGroupKeyEnum;
    limit?: number;
    nextToken?: string;
}
