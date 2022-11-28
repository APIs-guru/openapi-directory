import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigRuleComplianceSummaryFilters } from "./configrulecompliancesummaryfilters";
import { ConfigRuleComplianceSummaryGroupKeyEnum } from "./configrulecompliancesummarygroupkeyenum";
export declare class GetAggregateConfigRuleComplianceSummaryRequest extends SpeakeasyBase {
    configurationAggregatorName: string;
    filters?: ConfigRuleComplianceSummaryFilters;
    groupByKey?: ConfigRuleComplianceSummaryGroupKeyEnum;
    limit?: number;
    nextToken?: string;
}
