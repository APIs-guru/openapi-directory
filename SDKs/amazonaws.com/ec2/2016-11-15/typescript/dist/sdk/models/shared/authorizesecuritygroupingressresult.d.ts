import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityGroupRule } from "./securitygrouprule";
export declare class AuthorizeSecurityGroupIngressResult extends SpeakeasyBase {
    return?: boolean;
    securityGroupRules?: SecurityGroupRule[];
}
