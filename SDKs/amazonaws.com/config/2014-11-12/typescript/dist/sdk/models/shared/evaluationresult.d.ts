import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
import { EvaluationResultIdentifier } from "./evaluationresultidentifier";
/**
 * The details of an Config evaluation. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.
**/
export declare class EvaluationResult extends SpeakeasyBase {
    annotation?: string;
    complianceType?: ComplianceTypeEnum;
    configRuleInvokedTime?: Date;
    evaluationResultIdentifier?: EvaluationResultIdentifier;
    resultRecordedTime?: Date;
    resultToken?: string;
}
