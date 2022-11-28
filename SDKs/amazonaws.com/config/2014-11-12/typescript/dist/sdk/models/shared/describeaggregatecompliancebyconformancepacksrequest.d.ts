import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateConformancePackComplianceFilters } from "./aggregateconformancepackcompliancefilters";
export declare class DescribeAggregateComplianceByConformancePacksRequest extends SpeakeasyBase {
    configurationAggregatorName: string;
    filters?: AggregateConformancePackComplianceFilters;
    limit?: number;
    nextToken?: string;
}
