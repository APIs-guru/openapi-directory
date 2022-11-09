import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DnsRuleGroupLimitExceededViolation
/** 
 * The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit. 
**/
export class DnsRuleGroupLimitExceededViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=NumberOfRuleGroupsAlreadyAssociated" })
  numberOfRuleGroupsAlreadyAssociated?: number;

  @Metadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;

  @Metadata({ data: "json, name=ViolationTargetDescription" })
  violationTargetDescription?: string;
}
