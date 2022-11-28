import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationActionTypeEnum } from "./remediationactiontypeenum";
import { SecurityGroupRuleDescription } from "./securitygroupruledescription";
/**
 * Remediation option for the rule specified in the <code>ViolationTarget</code>.
**/
export declare class SecurityGroupRemediationAction extends SpeakeasyBase {
    description?: string;
    isDefaultAction?: boolean;
    remediationActionType?: RemediationActionTypeEnum;
    remediationResult?: SecurityGroupRuleDescription;
}
