import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceViolator } from "./complianceviolator";



// PolicyComplianceDetail
/** 
 * Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.
**/
export class PolicyComplianceDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationLimitExceeded" })
  evaluationLimitExceeded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExpiredAt" })
  expiredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=IssueInfoMap" })
  issueInfoMap?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=MemberAccount" })
  memberAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyOwner" })
  policyOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=Violators", elemType: ComplianceViolator })
  violators?: ComplianceViolator[];
}
