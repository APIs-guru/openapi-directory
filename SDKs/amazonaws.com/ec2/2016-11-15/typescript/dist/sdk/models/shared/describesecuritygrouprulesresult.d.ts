import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityGroupRule } from "./securitygrouprule";
export declare class DescribeSecurityGroupRulesResult extends SpeakeasyBase {
    nextToken?: string;
    securityGroupRules?: SecurityGroupRule[];
}
