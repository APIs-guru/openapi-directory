import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
import { EvaluationResultIdentifier } from "./evaluationresultidentifier";



// EvaluationResult
/** 
 * The details of an Config evaluation. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.
**/
export class EvaluationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Annotation" })
  annotation?: string;

  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType?: ComplianceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleInvokedTime" })
  configRuleInvokedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EvaluationResultIdentifier" })
  evaluationResultIdentifier?: EvaluationResultIdentifier;

  @SpeakeasyMetadata({ data: "json, name=ResultRecordedTime" })
  resultRecordedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResultToken" })
  resultToken?: string;
}
