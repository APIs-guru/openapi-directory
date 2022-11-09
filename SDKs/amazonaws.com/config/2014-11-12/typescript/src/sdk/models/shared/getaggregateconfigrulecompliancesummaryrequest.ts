import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigRuleComplianceSummaryFilters } from "./configrulecompliancesummaryfilters";
import { ConfigRuleComplianceSummaryGroupKeyEnum } from "./configrulecompliancesummarygroupkeyenum";


export class GetAggregateConfigRuleComplianceSummaryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @Metadata({ data: "json, name=Filters" })
  filters?: ConfigRuleComplianceSummaryFilters;

  @Metadata({ data: "json, name=GroupByKey" })
  groupByKey?: ConfigRuleComplianceSummaryGroupKeyEnum;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
