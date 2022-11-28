import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateEvaluationResult } from "./aggregateevaluationresult";



export class GetAggregateComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AggregateEvaluationResults", elemType: AggregateEvaluationResult })
  aggregateEvaluationResults?: AggregateEvaluationResult[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
