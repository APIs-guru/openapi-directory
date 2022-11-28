import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateComplianceCount } from "./aggregatecompliancecount";



export class GetAggregateConfigRuleComplianceSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AggregateComplianceCounts", elemType: AggregateComplianceCount })
  aggregateComplianceCounts?: AggregateComplianceCount[];

  @SpeakeasyMetadata({ data: "json, name=GroupByKey" })
  groupByKey?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
