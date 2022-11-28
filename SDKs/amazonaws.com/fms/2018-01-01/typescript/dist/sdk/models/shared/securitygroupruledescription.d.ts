import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a set of permissions for a security group rule.
**/
export declare class SecurityGroupRuleDescription extends SpeakeasyBase {
    fromPort?: number;
    ipv4Range?: string;
    ipv6Range?: string;
    prefixListId?: string;
    protocol?: string;
    toPort?: number;
}
