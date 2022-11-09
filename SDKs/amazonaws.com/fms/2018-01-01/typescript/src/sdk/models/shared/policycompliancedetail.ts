import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceViolator } from "./complianceviolator";


// PolicyComplianceDetail
/** 
 * Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>.
**/
export class PolicyComplianceDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationLimitExceeded" })
  evaluationLimitExceeded?: boolean;

  @Metadata({ data: "json, name=ExpiredAt" })
  expiredAt?: Date;

  @Metadata({ data: "json, name=IssueInfoMap" })
  issueInfoMap?: Map<string, string>;

  @Metadata({ data: "json, name=MemberAccount" })
  memberAccount?: string;

  @Metadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @Metadata({ data: "json, name=PolicyOwner" })
  policyOwner?: string;

  @Metadata({ data: "json, name=Violators", elemType: shared.ComplianceViolator })
  violators?: ComplianceViolator[];
}
