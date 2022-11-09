import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregateComplianceByConfigRule } from "./aggregatecompliancebyconfigrule";


export class DescribeAggregateComplianceByConfigRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AggregateComplianceByConfigRules", elemType: shared.AggregateComplianceByConfigRule })
  aggregateComplianceByConfigRules?: AggregateComplianceByConfigRule[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
