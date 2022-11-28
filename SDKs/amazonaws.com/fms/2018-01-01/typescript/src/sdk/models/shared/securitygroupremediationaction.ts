import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationActionTypeEnum } from "./remediationactiontypeenum";
import { SecurityGroupRuleDescription } from "./securitygroupruledescription";



// SecurityGroupRemediationAction
/** 
 * Remediation option for the rule specified in the <code>ViolationTarget</code>.
**/
export class SecurityGroupRemediationAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IsDefaultAction" })
  isDefaultAction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RemediationActionType" })
  remediationActionType?: RemediationActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RemediationResult" })
  remediationResult?: SecurityGroupRuleDescription;
}
