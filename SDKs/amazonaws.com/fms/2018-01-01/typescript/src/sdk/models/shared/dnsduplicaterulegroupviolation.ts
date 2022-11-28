import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DnsDuplicateRuleGroupViolation
/** 
 * A DNS Firewall rule group that Firewall Manager tried to associate with a VPC is already associated with the VPC and can't be associated again. 
**/
export class DnsDuplicateRuleGroupViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolationTargetDescription" })
  violationTargetDescription?: string;
}
