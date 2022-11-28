import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigRuleComplianceFilters } from "./configrulecompliancefilters";



export class DescribeAggregateComplianceByConfigRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: ConfigRuleComplianceFilters;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
