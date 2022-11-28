import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyComplianceStatusTypeEnum } from "./policycompliancestatustypeenum";
/**
 * Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy.
**/
export declare class EvaluationResult extends SpeakeasyBase {
    complianceStatus?: PolicyComplianceStatusTypeEnum;
    evaluationLimitExceeded?: boolean;
    violatorCount?: number;
}
