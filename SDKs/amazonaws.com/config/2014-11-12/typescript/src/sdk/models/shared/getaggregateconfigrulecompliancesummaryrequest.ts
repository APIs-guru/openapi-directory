import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigRuleComplianceSummaryFilters } from "./configrulecompliancesummaryfilters";
import { ConfigRuleComplianceSummaryGroupKeyEnum } from "./configrulecompliancesummarygroupkeyenum";



export class GetAggregateConfigRuleComplianceSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationAggregatorName" })
  configurationAggregatorName: string;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: ConfigRuleComplianceSummaryFilters;

  @SpeakeasyMetadata({ data: "json, name=GroupByKey" })
  groupByKey?: ConfigRuleComplianceSummaryGroupKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
