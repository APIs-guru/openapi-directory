import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceViolator } from "./complianceviolator";
/**
 * Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.
**/
export declare class PolicyComplianceDetail extends SpeakeasyBase {
    evaluationLimitExceeded?: boolean;
    expiredAt?: Date;
    issueInfoMap?: Map<string, string>;
    memberAccount?: string;
    policyId?: string;
    policyOwner?: string;
    violators?: ComplianceViolator[];
}
