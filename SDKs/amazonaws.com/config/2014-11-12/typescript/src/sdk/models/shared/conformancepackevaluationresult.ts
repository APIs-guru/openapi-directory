import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";
import { EvaluationResultIdentifier } from "./evaluationresultidentifier";


// ConformancePackEvaluationResult
/** 
 * The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information. 
**/
export class ConformancePackEvaluationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Annotation" })
  annotation?: string;

  @Metadata({ data: "json, name=ComplianceType" })
  complianceType: ConformancePackComplianceTypeEnum;

  @Metadata({ data: "json, name=ConfigRuleInvokedTime" })
  configRuleInvokedTime: Date;

  @Metadata({ data: "json, name=EvaluationResultIdentifier" })
  evaluationResultIdentifier: EvaluationResultIdentifier;

  @Metadata({ data: "json, name=ResultRecordedTime" })
  resultRecordedTime: Date;
}
