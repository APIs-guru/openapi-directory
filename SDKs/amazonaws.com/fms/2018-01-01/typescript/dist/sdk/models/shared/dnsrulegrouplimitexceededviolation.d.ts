import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit.
**/
export declare class DnsRuleGroupLimitExceededViolation extends SpeakeasyBase {
    numberOfRuleGroupsAlreadyAssociated?: number;
    violationTarget?: string;
    violationTargetDescription?: string;
}
