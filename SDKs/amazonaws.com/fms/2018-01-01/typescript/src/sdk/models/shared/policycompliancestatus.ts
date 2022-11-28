import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationResult } from "./evaluationresult";



// PolicyComplianceStatus
/** 
 * Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies.
**/
export class PolicyComplianceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationResults", elemType: EvaluationResult })
  evaluationResults?: EvaluationResult[];

  @SpeakeasyMetadata({ data: "json, name=IssueInfoMap" })
  issueInfoMap?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=MemberAccount" })
  memberAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyOwner" })
  policyOwner?: string;
}
