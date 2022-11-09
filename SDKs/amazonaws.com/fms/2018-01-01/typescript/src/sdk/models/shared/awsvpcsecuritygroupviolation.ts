import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartialMatch } from "./partialmatch";
import { SecurityGroupRemediationAction } from "./securitygroupremediationaction";


// AwsVpcSecurityGroupViolation
/** 
 * Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.
**/
export class AwsVpcSecurityGroupViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=PartialMatches", elemType: shared.PartialMatch })
  partialMatches?: PartialMatch[];

  @Metadata({ data: "json, name=PossibleSecurityGroupRemediationActions", elemType: shared.SecurityGroupRemediationAction })
  possibleSecurityGroupRemediationActions?: SecurityGroupRemediationAction[];

  @Metadata({ data: "json, name=ViolationTarget" })
  violationTarget?: string;

  @Metadata({ data: "json, name=ViolationTargetDescription" })
  violationTargetDescription?: string;
}
