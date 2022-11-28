import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DnsRuleGroupPriorityConflictViolation
/** 
 * A rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated. 
**/
export class DnsRuleGroupPriorityConflictViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConflictingPolicyId" })
  conflictingPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConflictingPriority" })
  conflictingPriority?: number;

  @SpeakeasyMetadata({ data: "json, name=UnavailablePriorities" })
  unavailablePriorities?: number[];

  @SpeakeasyMetadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolationTargetDescription" })
  violationTargetDescription?: string;
}
