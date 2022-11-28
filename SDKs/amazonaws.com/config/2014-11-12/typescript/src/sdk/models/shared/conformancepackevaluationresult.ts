import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";
import { EvaluationResultIdentifier } from "./evaluationresultidentifier";



// ConformancePackEvaluationResult
/** 
 * The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information. 
**/
export class ConformancePackEvaluationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Annotation" })
  annotation?: string;

  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType: ConformancePackComplianceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleInvokedTime" })
  configRuleInvokedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EvaluationResultIdentifier" })
  evaluationResultIdentifier: EvaluationResultIdentifier;

  @SpeakeasyMetadata({ data: "json, name=ResultRecordedTime" })
  resultRecordedTime: Date;
}
