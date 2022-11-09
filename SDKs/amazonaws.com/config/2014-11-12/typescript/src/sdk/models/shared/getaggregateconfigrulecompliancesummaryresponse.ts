import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregateComplianceCount } from "./aggregatecompliancecount";


export class GetAggregateConfigRuleComplianceSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AggregateComplianceCounts", elemType: shared.AggregateComplianceCount })
  aggregateComplianceCounts?: AggregateComplianceCount[];

  @Metadata({ data: "json, name=GroupByKey" })
  groupByKey?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
