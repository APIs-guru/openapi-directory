import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A DNS Firewall rule group that Firewall Manager tried to associate with a VPC is already associated with the VPC and can't be associated again.
**/
export declare class DnsDuplicateRuleGroupViolation extends SpeakeasyBase {
    violationTarget?: string;
    violationTargetDescription?: string;
}
