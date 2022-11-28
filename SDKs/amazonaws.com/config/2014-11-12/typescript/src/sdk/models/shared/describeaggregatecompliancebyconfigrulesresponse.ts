import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateComplianceByConfigRule } from "./aggregatecompliancebyconfigrule";



export class DescribeAggregateComplianceByConfigRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AggregateComplianceByConfigRules", elemType: AggregateComplianceByConfigRule })
  aggregateComplianceByConfigRules?: AggregateComplianceByConfigRule[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
