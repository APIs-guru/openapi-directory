import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackEvaluationResult } from "./conformancepackevaluationresult";



export class GetConformancePackComplianceDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackRuleEvaluationResults", elemType: ConformancePackEvaluationResult })
  conformancePackRuleEvaluationResults?: ConformancePackEvaluationResult[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
