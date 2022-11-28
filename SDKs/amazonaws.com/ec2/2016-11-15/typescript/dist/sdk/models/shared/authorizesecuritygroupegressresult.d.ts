import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityGroupRule } from "./securitygrouprule";
export declare class AuthorizeSecurityGroupEgressResult extends SpeakeasyBase {
    return?: boolean;
    securityGroupRules?: SecurityGroupRule[];
}
