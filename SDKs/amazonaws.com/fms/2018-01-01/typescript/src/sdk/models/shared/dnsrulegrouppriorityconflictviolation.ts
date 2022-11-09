import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DnsRuleGroupPriorityConflictViolation
/** 
 * A rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated. 
**/
export class DnsRuleGroupPriorityConflictViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConflictingPolicyId" })
  conflictingPolicyId?: string;

  @Metadata({ data: "json, name=ConflictingPriority" })
  conflictingPriority?: number;

  @Metadata({ data: "json, name=UnavailablePriorities" })
  unavailablePriorities?: number[];

  @Metadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;

  @Metadata({ data: "json, name=ViolationTargetDescription" })
  violationTargetDescription?: string;
}
