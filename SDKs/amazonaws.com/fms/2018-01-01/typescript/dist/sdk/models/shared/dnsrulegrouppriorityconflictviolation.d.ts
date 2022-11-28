import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated.
**/
export declare class DnsRuleGroupPriorityConflictViolation extends SpeakeasyBase {
    conflictingPolicyId?: string;
    conflictingPriority?: number;
    unavailablePriorities?: number[];
    violationTarget?: string;
    violationTargetDescription?: string;
}
