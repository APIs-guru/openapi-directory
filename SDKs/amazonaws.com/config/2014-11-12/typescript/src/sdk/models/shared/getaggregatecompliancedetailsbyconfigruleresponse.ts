import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregateEvaluationResult } from "./aggregateevaluationresult";


export class GetAggregateComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AggregateEvaluationResults", elemType: shared.AggregateEvaluationResult })
  aggregateEvaluationResults?: AggregateEvaluationResult[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
