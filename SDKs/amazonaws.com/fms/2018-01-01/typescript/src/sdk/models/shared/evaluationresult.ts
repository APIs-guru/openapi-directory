import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyComplianceStatusTypeEnum } from "./policycompliancestatustypeenum";



// EvaluationResult
/** 
 * Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy.
**/
export class EvaluationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceStatus" })
  complianceStatus?: PolicyComplianceStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EvaluationLimitExceeded" })
  evaluationLimitExceeded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ViolatorCount" })
  violatorCount?: number;
}
