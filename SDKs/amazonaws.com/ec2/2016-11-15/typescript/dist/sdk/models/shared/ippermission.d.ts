import { SpeakeasyBase } from "../../../internal/utils";
import { IpRange } from "./iprange";
import { Ipv6Range } from "./ipv6range";
import { PrefixListId } from "./prefixlistid";
import { UserIdGroupPair } from "./useridgrouppair";
/**
 * Describes a set of permissions for a security group rule.
**/
export declare class IpPermission extends SpeakeasyBase {
    fromPort?: number;
    ipProtocol?: string;
    ipRanges?: IpRange[];
    ipv6Ranges?: Ipv6Range[];
    prefixListIds?: PrefixListId[];
    toPort?: number;
    userIdGroupPairs?: UserIdGroupPair[];
}
