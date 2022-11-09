import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConformancePackEvaluationResult } from "./conformancepackevaluationresult";


export class GetConformancePackComplianceDetailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @Metadata({ data: "json, name=ConformancePackRuleEvaluationResults", elemType: shared.ConformancePackEvaluationResult })
  conformancePackRuleEvaluationResults?: ConformancePackEvaluationResult[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
