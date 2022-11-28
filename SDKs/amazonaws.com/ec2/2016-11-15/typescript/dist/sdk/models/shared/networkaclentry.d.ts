import { SpeakeasyBase } from "../../../internal/utils";
import { IcmpTypeCode } from "./icmptypecode";
import { PortRange } from "./portrange";
import { RuleActionEnum } from "./ruleactionenum";
/**
 * Describes an entry in a network ACL.
**/
export declare class NetworkAclEntry extends SpeakeasyBase {
    cidrBlock?: string;
    egress?: boolean;
    icmpTypeCode?: IcmpTypeCode;
    ipv6CidrBlock?: string;
    portRange?: PortRange;
    protocol?: string;
    ruleAction?: RuleActionEnum;
    ruleNumber?: number;
}
