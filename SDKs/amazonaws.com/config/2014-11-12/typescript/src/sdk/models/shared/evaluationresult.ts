import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
import { EvaluationResultIdentifier } from "./evaluationresultidentifier";


// EvaluationResult
/** 
 * The details of an Config evaluation. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.
**/
export class EvaluationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Annotation" })
  annotation?: string;

  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: ComplianceTypeEnum;

  @Metadata({ data: "json, name=ConfigRuleInvokedTime" })
  configRuleInvokedTime?: Date;

  @Metadata({ data: "json, name=EvaluationResultIdentifier" })
  evaluationResultIdentifier?: EvaluationResultIdentifier;

  @Metadata({ data: "json, name=ResultRecordedTime" })
  resultRecordedTime?: Date;

  @Metadata({ data: "json, name=ResultToken" })
  resultToken?: string;
}
