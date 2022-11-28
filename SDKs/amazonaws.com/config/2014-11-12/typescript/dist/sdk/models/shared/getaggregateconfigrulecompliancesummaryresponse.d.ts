import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateComplianceCount } from "./aggregatecompliancecount";
export declare class GetAggregateConfigRuleComplianceSummaryResponse extends SpeakeasyBase {
    aggregateComplianceCounts?: AggregateComplianceCount[];
    groupByKey?: string;
    nextToken?: string;
}
