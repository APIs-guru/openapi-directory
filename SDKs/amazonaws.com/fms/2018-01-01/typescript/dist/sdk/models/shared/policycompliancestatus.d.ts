import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationResult } from "./evaluationresult";
/**
 * Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies.
**/
export declare class PolicyComplianceStatus extends SpeakeasyBase {
    evaluationResults?: EvaluationResult[];
    issueInfoMap?: Map<string, string>;
    lastUpdated?: Date;
    memberAccount?: string;
    policyId?: string;
    policyName?: string;
    policyOwner?: string;
}
