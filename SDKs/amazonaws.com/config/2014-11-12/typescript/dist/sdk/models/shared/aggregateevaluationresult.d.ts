import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceTypeEnum } from "./compliancetypeenum";
import { EvaluationResultIdentifier } from "./evaluationresultidentifier";
/**
 * The details of an Config evaluation for an account ID and region in an aggregator. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.
**/
export declare class AggregateEvaluationResult extends SpeakeasyBase {
    accountId?: string;
    annotation?: string;
    awsRegion?: string;
    complianceType?: ComplianceTypeEnum;
    configRuleInvokedTime?: Date;
    evaluationResultIdentifier?: EvaluationResultIdentifier;
    resultRecordedTime?: Date;
}
