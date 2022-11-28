import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceTypeEnum } from "./conformancepackcompliancetypeenum";
import { EvaluationResultIdentifier } from "./evaluationresultidentifier";
/**
 * The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information.
**/
export declare class ConformancePackEvaluationResult extends SpeakeasyBase {
    annotation?: string;
    complianceType: ConformancePackComplianceTypeEnum;
    configRuleInvokedTime: Date;
    evaluationResultIdentifier: EvaluationResultIdentifier;
    resultRecordedTime: Date;
}
