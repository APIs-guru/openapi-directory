import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EvaluationResult } from "./evaluationresult";


// PolicyComplianceStatus
/** 
 * Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies.
**/
export class PolicyComplianceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationResults", elemType: shared.EvaluationResult })
  evaluationResults?: EvaluationResult[];

  @Metadata({ data: "json, name=IssueInfoMap" })
  issueInfoMap?: Map<string, string>;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=MemberAccount" })
  memberAccount?: string;

  @Metadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @Metadata({ data: "json, name=PolicyName" })
  policyName?: string;

  @Metadata({ data: "json, name=PolicyOwner" })
  policyOwner?: string;
}
