import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigRuleComplianceFilters } from "./configrulecompliancefilters";
export declare class DescribeAggregateComplianceByConfigRulesRequest extends SpeakeasyBase {
    configurationAggregatorName: string;
    filters?: ConfigRuleComplianceFilters;
    limit?: number;
    nextToken?: string;
}
