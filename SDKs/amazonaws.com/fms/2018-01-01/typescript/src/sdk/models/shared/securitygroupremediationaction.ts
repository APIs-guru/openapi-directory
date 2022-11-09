import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RemediationActionTypeEnum } from "./remediationactiontypeenum";
import { SecurityGroupRuleDescription } from "./securitygroupruledescription";


// SecurityGroupRemediationAction
/** 
 * Remediation option for the rule specified in the <code>ViolationTarget</code>.
**/
export class SecurityGroupRemediationAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IsDefaultAction" })
  isDefaultAction?: boolean;

  @Metadata({ data: "json, name=RemediationActionType" })
  remediationActionType?: RemediationActionTypeEnum;

  @Metadata({ data: "json, name=RemediationResult" })
  remediationResult?: SecurityGroupRuleDescription;
}
