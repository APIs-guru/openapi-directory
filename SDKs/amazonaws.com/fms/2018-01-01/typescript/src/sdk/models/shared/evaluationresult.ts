import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyComplianceStatusTypeEnum } from "./policycompliancestatustypeenum";


// EvaluationResult
/** 
 * Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy.
**/
export class EvaluationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceStatus" })
  complianceStatus?: PolicyComplianceStatusTypeEnum;

  @Metadata({ data: "json, name=EvaluationLimitExceeded" })
  evaluationLimitExceeded?: boolean;

  @Metadata({ data: "json, name=ViolatorCount" })
  violatorCount?: number;
}
