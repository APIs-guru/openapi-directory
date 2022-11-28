import { SpeakeasyBase } from "../../../internal/utils";
import { ReferencedSecurityGroup } from "./referencedsecuritygroup";
import { Tag } from "./tag";
/**
 * Describes a security group rule.
**/
export declare class SecurityGroupRule extends SpeakeasyBase {
    cidrIpv4?: string;
    cidrIpv6?: string;
    description?: string;
    fromPort?: number;
    groupId?: string;
    groupOwnerId?: string;
    ipProtocol?: string;
    isEgress?: boolean;
    prefixListId?: string;
    referencedGroupInfo?: ReferencedSecurityGroup;
    securityGroupRuleId?: string;
    tags?: Tag[];
    toPort?: number;
}
