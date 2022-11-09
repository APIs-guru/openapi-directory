import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigRuleComplianceFilters } from "./configrulecompliancefilters";


export class DescribeAggregateComplianceByConfigRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @Metadata({ data: "json, name=Filters" })
  filters?: ConfigRuleComplianceFilters;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
