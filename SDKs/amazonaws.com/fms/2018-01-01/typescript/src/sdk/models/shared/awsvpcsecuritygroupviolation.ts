import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartialMatch } from "./partialmatch";
import { SecurityGroupRemediationAction } from "./securitygroupremediationaction";



// AwsVpcSecurityGroupViolation
/** 
 * Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.
**/
export class AwsVpcSecurityGroupViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PartialMatches", elemType: PartialMatch })
  partialMatches?: PartialMatch[];

  @SpeakeasyMetadata({ data: "json, name=PossibleSecurityGroupRemediationActions", elemType: SecurityGroupRemediationAction })
  possibleSecurityGroupRemediationActions?: SecurityGroupRemediationAction[];

  @SpeakeasyMetadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=ViolationTargetDescription" })
  violationTargetDescription?: string;
}
